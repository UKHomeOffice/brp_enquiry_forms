#! /bin/bash
set -e

export INGRESS_INTERNAL_ANNOTATIONS=$HOF_CONFIG/ingress-internal-annotations.yaml
#Whitelist updated with POISE IPs
export INGRESS_EXTERNAL_ANNOTATIONS=$HOF_CONFIG/ingress-external-annotations.yaml
export INGRESS_EXTERNAL_RESTRICTED_ANNOTATIONS=$HOF_CONFIG/ingress-external-restricted-annotation.yaml

export CONFIGMAP_VALUES=$HOF_CONFIG/configmap-values.yaml
export NGINX_SETTINGS=$HOF_CONFIG/nginx-settings.yaml
export REDIS_PERSISTENCE_SIZE=${REDIS_PERSISTENCE_SIZE:-"1Gi"}

kd='kd --insecure-skip-tls-verify --timeout 10m --check-interval 10s'

redis_storage_files='kube/redis/redis-persistent-volume-claim.yml'
redis_runtime_files='kube/redis/redis-service.yml -f kube/redis/redis-network-policy.yml -f kube/redis/redis-deployment.yml'

export REDIS_PERSISTENCE_ENABLED=${REDIS_PERSISTENCE_ENABLED:-}
export REDIS_PERSISTENCE_EXISTING_CLAIM=${REDIS_PERSISTENCE_EXISTING_CLAIM:-}
export REDIS_PERSISTENCE_ACCESS_MODES=${REDIS_PERSISTENCE_ACCESS_MODES:-ReadWriteOnce}
export REDIS_PERSISTENCE_STORAGE_CLASS=${REDIS_PERSISTENCE_STORAGE_CLASS:-gp2-encrypted-eu-west-2b}
export REDIS_PERSISTENCE_ANNOTATIONS_FILE=${REDIS_PERSISTENCE_ANNOTATIONS_FILE:-}
export REDIS_DELETE_PVC_ON_TEARDOWN=${REDIS_DELETE_PVC_ON_TEARDOWN:-false}

sanitize_branch_name() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//'
}

set_redis_persistence() {
  if [[ ${KUBE_NAMESPACE} == ${STG_ENV} || ${KUBE_NAMESPACE} == ${PROD_ENV} ]]; then
    export REDIS_PERSISTENCE_ENABLED=${REDIS_PERSISTENCE_ENABLED:-true}
  else
    export REDIS_PERSISTENCE_ENABLED=false
  fi

  REDIS_PERSISTENCE_ENABLED=$(echo "$REDIS_PERSISTENCE_ENABLED" | tr '[:upper:]' '[:lower:]')
  export REDIS_PERSISTENCE_ENABLED

  if [[ ${KUBE_NAMESPACE} == ${PROD_ENV} ]]; then
    export REDIS_PERSISTENCE_SIZE=10Gi
  elif [[ ${KUBE_NAMESPACE} == ${STG_ENV} ]]; then
    export REDIS_PERSISTENCE_SIZE=1Gi
  else
    export REDIS_PERSISTENCE_SIZE=${REDIS_PERSISTENCE_SIZE:-1Gi}
  fi
}

should_create_redis_pvc() {
  [[ (${KUBE_NAMESPACE} == ${STG_ENV} || ${KUBE_NAMESPACE} == ${PROD_ENV}) && ${REDIS_PERSISTENCE_ENABLED} == "true" && -z "${REDIS_PERSISTENCE_EXISTING_CLAIM}" ]]
}

delete_redis() {
  if [[ ${REDIS_DELETE_PVC_ON_TEARDOWN} == "true" ]] && should_create_redis_pvc; then
    $kd --delete -f $redis_storage_files
  fi

  $kd --delete -f $redis_runtime_files
}

deploy_namespace() {
  if [[ ${KUBE_NAMESPACE} == ${BRANCH_ENV} ]]; then
    $kd -f kube/configmaps -f kube/certs
    $kd -f $redis_runtime_files
    $kd -f kube/app
  elif [[ ${KUBE_NAMESPACE} == ${UAT_ENV} ]]; then
    $kd -f kube/configmaps/configmap.yml
    $kd -f $redis_runtime_files
    $kd -f kube/app
  elif [[ ${KUBE_NAMESPACE} == ${STG_ENV} ]]; then
    $kd -f kube/configmaps/configmap.yml -f kube/app/service.yml
    $kd -f kube/app/networkpolicy-internal.yml -f kube/app/ingress-internal.yml
    if should_create_redis_pvc; then
      $kd -f $redis_storage_files
    fi
    $kd -f $redis_runtime_files
    $kd -f kube/app/deployment.yml
  elif [[ ${KUBE_NAMESPACE} == ${PROD_ENV} ]]; then
    $kd -f kube/configmaps/configmap.yml -f kube/app/service.yml
    $kd -f kube/app/networkpolicy-external.yml -f kube/app/ingress-external.yml -f kube/app/ingress-external-restriction.yml
    if should_create_redis_pvc; then
      $kd -f $redis_storage_files
    fi
    $kd -f $redis_runtime_files
    $kd -f kube/app/deployment.yml
  fi
}

if [[ $1 == 'tear_down' ]]; then
  export KUBE_NAMESPACE=$BRANCH_ENV
  export DRONE_SOURCE_BRANCH=$(sanitize_branch_name "$(cat /root/.dockersock/branch_name.txt)")

  if [[ -z "$DRONE_SOURCE_BRANCH" ]]; then
    echo "Unable to tear down branch environment: DRONE_SOURCE_BRANCH is empty"
    exit 1
  fi

  set_redis_persistence

  $kd --delete -f kube/configmaps/configmap.yml
  delete_redis
  $kd --delete -f kube/app

  echo "Torn Down Branch - $APP_NAME-$DRONE_SOURCE_BRANCH.internal.$BRANCH_ENV.homeoffice.gov.uk"
  exit 0
fi

export KUBE_NAMESPACE=$1
export DRONE_SOURCE_BRANCH=$(sanitize_branch_name "$DRONE_SOURCE_BRANCH")
set_redis_persistence

deploy_namespace

sleep $READY_FOR_TEST_DELAY

if [[ ${KUBE_NAMESPACE} == ${BRANCH_ENV} ]]; then
  echo "Branch - $APP_NAME-$DRONE_SOURCE_BRANCH.internal.$BRANCH_ENV.homeoffice.gov.uk"
fi

#! /bin/bash
set -e

export IGNORE_NETPOL=("acp-deny-all")
export IGNORE_CONFIGMAP=("bundle")
export IGNORE_SECRET=("brp-preprod-brp-session" "brp-preprod-redis" "brp-preprod-smtp" "brp-session" "grafana-admin" "oauth-client" "redis" "smtp" "sysdig")

export kubectl="kubectl --insecure-skip-tls-verify --server=$KUBE_SERVER --namespace=$KUBE_NAMESPACE --token=$KUBE_TOKEN"

$kubectl delete --all deploy
$kubectl delete --all svc
$kubectl delete --all ing

for each in $($kubectl get netpol -o jsonpath="{.items[*].metadata.name}");
do
  if [[ ! " ${IGNORE_NETPOL[@]} " =~ " ${each} " ]]; then
    $kubectl delete netpol "$each"
  fi
done

for each in $($kubectl get configmap -o jsonpath="{.items[*].metadata.name}");
do
  if [[ ! " ${IGNORE_CONFIGMAP[@]} " =~ " ${each} " ]]; then
    $kubectl delete configmap "$each"
  fi
done

for each in $($kubectl get secrets -o jsonpath="{.items[*].metadata.name}");
do
  if [[ ! " ${IGNORE_SECRET[@]} " =~ " ${each} " ]]; then
    if [[ $each != *"default-token"* ]]; then
      $kubectl delete secret "$each"
    fi
  fi
done
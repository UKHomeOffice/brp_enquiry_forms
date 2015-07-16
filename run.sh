#!/bin/bash

# copy assets over to /assets for nginx container to serve, only copy if /assets
# directory exists, which implies that kubernetes volume has been mounted
ASSETS_DIR='/assets'
if [[ -d ${ASSETS_DIR} ]] && [[ ! $(ls -A ${ASSETS_DIR}) ]]; then
  cp -r /brp_app/assets/ /
fi

npm start

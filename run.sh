#!/bin/bash

# copy assets over to /assets for nginx container to serve, only copy if /assets
# directory exists, which implies that kubernetes volume has been mounted
PUBLIC_DIR='/public'
if [[ -d ${PUBLIC_DIR} ]] && [[ ! $(ls -A ${PUBLIC_DIR}) ]]; then
  cp -r /brp_app/public/ /
fi

npm start

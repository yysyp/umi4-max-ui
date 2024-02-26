#! /bin/bash
set -ue

FRONT_CODE_BASE=/d/patrick/github-com/umi4-max-ui
FRONT_CODE_IN_JAVA_STATIC=/d/patrick/github-com/simple-e-commerce-v3/src/main/resources/static/myui
APPVER=$(date +"%Y%m%d-%H%M%S")
CURDIR=$(pwd)

cd "${FRONT_CODE_BASE}"

npm run build

if [ -d "${FRONT_CODE_IN_JAVA_STATIC}" ]; then
    rm -r "${FRONT_CODE_IN_JAVA_STATIC}"
fi

cp -r dist/myui "${FRONT_CODE_IN_JAVA_STATIC}"

echo "dist/myui folder copied to folder: ${FRONT_CODE_IN_JAVA_STATIC}."


#! /bin/bash
set -ue

APPNAME=myapp
APPVER=$(date +"%Y%m%d-%H%M%S")
CURDIR=$(pwd)

#anyKey=''
#read -s -p 'Type any key to continue:' anyKey

cd ..
npm run build

#docker login -u xxx -p xxx
docker build -t ${APPNAME}:${APPVER} -f deployment/Dockerfile .

#cp k8s.yaml-template k8s.yaml
#sed -i "s/APPNAME/${APPNAME}/g" k8s.yaml
#sed -i "s/APPVER/${APPVER}/g" k8s.yaml

echo "To start app in docker: docker run --rm -it -p 8080:8080 ${APPNAME}:${APPVER}"
echo "And then visit: http://localhost:8080/myui"

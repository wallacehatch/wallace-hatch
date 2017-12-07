#!/bin/bash
export NAME=kops.wallacehatch.com
export KOPS_STATE_STORE=s3://wallace-hatch-kubernetes
kops export kubecfg ${NAME}
buildCode=`openssl rand -hex 4` 
npm run build
docker build -t wallace-hatch-frontend .
docker tag wallace-hatch-frontend:latest 145054867171.dkr.ecr.us-east-1.amazonaws.com/wallace-hatch-frontend:latest
docker push 145054867171.dkr.ecr.us-east-1.amazonaws.com/wallace-hatch-frontend:latest
kubectl set image deployment/frontend-deployment frontend-container=145054867171.dkr.ecr.us-east-1.amazonaws.com/wallace-hatch-frontend:latest

# Office Quotes

Kubernetes demo.

```
minikube start --driver=docker
```

## API

```
docker build -t codingpierogi/office-quotes-api ./office-quotes-api

kubectl create namespace office-quotes
kubectl apply -f ./office-quotes-api/kube/deployment.yaml -n office-quotes
kubectl apply -f ./office-quotes-api/kube/service.yaml -n office-quotes

kubectl port-forward service/office-quotes-api 4000:4000 -n office-quotes
```

## Data

```
kubectl create namespace office-quotes
kubectl apply -f ./office-quotes-data/kube/config.yaml -n office-quotes
kubectl apply -f ./office-quotes-data/kube/pv.yaml -n office-quotes
kubectl apply -f ./office-quotes-data/kube/pvc.yaml -n office-quotes
kubectl apply -f ./office-quotes-data/kube/deployment.yaml -n office-quotes
kubectl apply -f ./office-quotes-data/kube/service.yaml -n office-quotes

kubectl port-forward service/office-quotes-data 5432:5432 -n office-quotes
```

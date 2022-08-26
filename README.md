# Office Quotes

Kubernetes demo.

## Data

```
kubectl create namespace office-quotes
kubectl apply -f ./office-quotes-data/kube/config.yaml -n office-quotes
kubectl apply -f ./office-quotes-data/kube/pv.yaml -n office-quotes
kubectl apply -f ./office-quotes-data/kube/pvc.yaml -n office-quotes
kubectl apply -f ./office-quotes-data/kube/deployment.yaml -n office-quotes
kubectl apply -f ./office-quotes-data/kube/service.yaml -n office-quotes

kubectl port-forward service/office-quotes 5432:5432 -n office-quotes
```

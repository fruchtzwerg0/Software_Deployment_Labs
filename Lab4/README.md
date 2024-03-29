# Lab 4

Zuerst muss man Microsoft.OperationsManagement und Microsoft.OperationalInsights registrieren.

```
az provider register --namespace Microsoft.OperationsManagement
az provider register --namespace Microsoft.OperationalInsights
```

Dann legt man eine Ressourcengruppe an

```
az group create --name myKubernetesGroup --location germanywestcentral
```

Dann legt man einen Kubernetes-Cluster an

```
az aks create -g myKubernetesGroup -n myAKSCluster --enable-managed-identity --node-count 1 --enable-addons monitoring --enable-msi-auth-for-monitoring  --generate-ssh-keys
```

Es musst `kubectl` mit `az aks install-cli` installiert werden.

Dann verbindet man `kubectl` mit dem Kubernetes Cluster.

Die beiden yaml files werden mit `kubectl apply -f <Namen>.yaml` deployed.

AKS Cluster im Azure Portal:
![](../Lab4/images/Screenshot%202023-12-20%20105510.png)

Wordpress Service:
![](../Lab4/images/Screenshot%202023-12-20%20105525.png)

Deployment der yaml files:
![](../Lab4/images/Screenshot%202023-12-20%20105534.png)

Die laufenden pods:
![](../Lab4/images/Screenshot%202023-12-20%20105629.png)

Load Balancer bitte ignorieren, ist ein Artefakt des Testings:
![](../Lab4/images/Screenshot%202023-12-20%20105709.png)

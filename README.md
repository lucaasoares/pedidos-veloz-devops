# Pedidos Veloz - Projeto DevOps

## Descrição
Projeto demonstrando pipeline DevOps completo usando Docker, Kubernetes e CI/CD.

## Ambiente Local (Docker Compose)

Subir ambiente:
docker compose up -d

Ver containers:
docker ps -a

## Kubernetes

Aplicar manifests:
kubectl apply -f k8s/

Ver pods:
kubectl get pods

## CI/CD

Pipeline configurado via GitHub Actions no arquivo:
.github/workflows/ci-cd.yaml

## Observabilidade

Proposta de uso de Prometheus (métricas), Loki (logs) e Jaeger (tracing).

## Estratégia de Deploy

Rolling Update via Kubernetes Deployments.

## Escalabilidade

Possível uso de Horizontal Pod Autoscaler (HPA) baseado em CPU.

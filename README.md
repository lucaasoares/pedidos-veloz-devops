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

## Observabilidade 1

Proposta de uso de Prometheus (métricas), Loki (logs) e Jaeger (tracing).

## Estratégia de Deploy

Rolling Update via Kubernetes Deployments.

## Escalabilidade

Possível uso de Horizontal Pod Autoscaler (HPA) baseado em CPU.

## Infraestrutura como Código (Terraform)

A pasta `terraform/` contém um esqueleto Terraform demonstrando como a infraestrutura Kubernetes poderia ser reproduzida como código em ambiente real.

## Observabilidade 2

Logs são emitidos via stdout dos containers e coletados pelo Kubernetes.
Métricas podem ser obtidas via Metrics Server.
Tracing distribuído é proposto com OpenTelemetry + Jaeger.

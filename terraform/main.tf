terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}

# Nome do projeto
resource "kubernetes_namespace" "pedidos_veloz" {
  metadata {
    name = "pedidos-veloz"
  }
}

# Simula as configs da aplicação
resource "kubernetes_config_map" "app_config" {
  metadata {
    name      = "app-config"
    namespace = kubernetes_namespace.pedidos_veloz.metadata[0].name
  }

  data = {
    APP_ENV = "production"
    LOG_LEVEL = "info"
  }
}

# Simula a segurança das credencias do banco
resource "kubernetes_secret" "db_secret" {
  metadata {
    name      = "db-secret"
    namespace = kubernetes_namespace.pedidos_veloz.metadata[0].name
  }

  data = {
    POSTGRES_PASSWORD = base64encode("postgres")
  }

  type = "Opaque"
}
#!/bin/bash

set -e

echo "Criando estrutura do Helm..."

mkdir -p helm/estetica-app/templates

cat >helm/estetica-app/Chart.yaml <<EOF
apiVersion: v2
name: estetica-app
description: Chart para o app Estética
version: 0.1.0
appVersion: "1.0.0"
EOF

cat >helm/estetica-app/values.yaml <<EOF
image:
    repository: faelsouz/dra-ana-paula
    tag: latest
    pullPolicy: Always

app:
    name: estetica-app
    namespace: est-app

service:
    type: ClusterIP
    port: 80
EOF

cat >helm/estetica-app/templates/deployment.yaml <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
    name: {{ .Values.app.name }}
    namespace: {{ .Values.app.namespace }}
spec:
    replicas: 1
    selector:
    matchLabels:
        app: {{ .Values.app.name }}
    template:
    metadata:
        labels:
        app: {{ .Values.app.name }}
    spec:
        containers:
            - name: {{ .Values.app.name }}
            image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
            imagePullPolicy: {{ .Values.image.pullPolicy }}
            ports:
                - containerPort: 80
EOF

cat >helm/estetica-app/templates/service.yaml <<EOF
apiVersion: v1
kind: Service
metadata:
    name: {{ .Values.app.name }}-service
    namespace: {{ .Values.app.namespace }}
spec:
    type: {{ .Values.service.type }}
    selector:
    app: {{ .Values.app.name }}
    ports:
    - port: {{ .Values.service.port }}
        targetPort: 80
EOF

cat >argocd-app.yaml <<EOF
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
    name: estetica-app
    namespace: argocd
spec:
    project: default
    source:
    repoURL: https://github.com/faelsou/dra-ana-paula
    targetRevision: feature-0001
    path: helm/estetica-app
    helm:
        valueFiles:
        - values.yaml
    destination:
    server: https://kubernetes.default.svc
    namespace: est-app
    syncPolicy:
    automated:
        prune: true
        selfHeal: true
    sy  ncOptions:
        - CreateNamespace=true
EOF

echo "✅ Helm chart e Argo CD app YAML criados com sucesso!"

pipeline {
    agent any

    environment {
        ACR_LOGIN_SERVER = 'flaskacr12345.azurecr.io'
    }
    
    stages {
        stage('Checkout') {
            steps {
                sh 'pwd'
                git branch: 'main', url: 'https://github.com/toysroom/react-devops.git'
                sh 'ls -la'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        // stage('E2E Tests') {
        //     steps {
        //         sh 'npx cypress run'
        //     }
        // }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-react-app:latest .' 
            }
        }
        stage('Deploy to Azure App Service') {
            steps {
                withCredentials([azureServicePrincipal('b1117f31-b4d7-4a67-8207-4b8742f03c18')]) {
                    sh 'az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET -t $AZURE_TENANT_ID'
                    sh 'az account show' 
                    sh 'az account set --subscription $AZURE_SUBSCRIPTION_ID'
                    sh 'az webapp config container set --name flask-app12345 --resource-group flask-rg --docker-custom-image-name $ACR_LOGIN_SERVER/my-react-app:latest'
                    sh 'az webapp restart --name flask-app12345 --resource-group flask-rg'
                }
            }
        }
    }
}
pipeline {
    agent any

    // environment {
    //     ACR_LOGIN_SERVER = 'flaskacr12345.azurecr.io'
    // }
    
    stages {

        stage('Pre checkout') {
            steps {
                echo "Hello world"
            }
        }

        stage('Checkout') {
            steps {
                sh 'pwd'
                git branch: 'main', url: 'https://github.com/toysroom/react-devops.git'
                sh 'ls -la'
            }
        }
        // stage('Install dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        // stage('Lint') {
        //     steps {
        //         sh 'npm run lint'
        //     }
        // }

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
                sh 'docker build ./pippo/ -t my-react-app:1.0' 
            }
        }

        // stage('Login to ACR') {
        //     steps {
        //         withCredentials([usernamePassword(credentialsId: '85c7ecb9-125d-429d-bc12-380a6f79aa4a', usernameVariable: 'ACR_USERNAME', passwordVariable: 'ACR_PASSWORD')]) {
        //             sh 'docker login $ACR_LOGIN_SERVER -u $ACR_USERNAME -p $ACR_PASSWORD'
        //         }
        //     }
        // }
        // stage('Push to ACR') {
        //     steps {
        //         sh 'docker tag my-react-app $ACR_LOGIN_SERVER/my-react-app:latest'
        //         sh 'docker push $ACR_LOGIN_SERVER/my-react-app:latest'
        //     }
        // }

        // stage('Deploy to Azure App Service') {
        //     steps {
        //         withCredentials([azureServicePrincipal('b1117f31-b4d7-4a67-8207-4b8742f03c18')]) {
        //             sh 'az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET -t $AZURE_TENANT_ID'
        //             sh 'az account show' 
        //             sh 'az account set --subscription $AZURE_SUBSCRIPTION_ID'
        //             sh 'az webapp config container set --name flask-app12345 --resource-group flask-rg --docker-custom-image-name $ACR_LOGIN_SERVER/my-react-app:latest'
        //             sh 'az webapp restart --name flask-app12345 --resource-group flask-rg'
        //         }
        //     }
        // }
    }

    post {
        success {
            echo 'OK'
            mail to: 'alessandro.brugioni@gmail.com',
                subject: "Build Success: ${currentBuild.fullDisplayName}.",
                body: "The build was successful! Check the logs here: ${env.BUILD_URL}"
        }

        failure {
            echo 'KO'
            mail to: 'alessandro.brugioni@gmail.com',
                subject: "Build failed: ${currentBuild.fullDisplayName}",
                body: "The build was failed!. Check the logs here: ${env.BUILD_URL}"
        }
    }
}
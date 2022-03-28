pipeline {
    agent any
    stages{
        stage('build with kinako'){
            steps {
                withKubeCredentials([
                    [credentialsId: 'jenkins-robot', serverUrl: 'https://192.168.4.130:16443', namespace:'pg-dev']
                    ]){
                    sh 'uname -a'
                    sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'  
                    sh 'chmod u+x ./kubectl'  
                    sh './kubectl apply -f kinako.yaml'
                }
            }
        }
        stage('run kubectl'){
            steps {
                withKubeCredentials([
                    [credentialsId: 'jenkins-robot', serverUrl: 'https://192.168.4.130:16443', namespace:'pg-dev']
                    ]){
                    sh './kubectl apply -f web.yaml'
                }
            }
        }
    }
}

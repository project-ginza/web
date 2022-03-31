pipeline {
    agent any
    stages{
        stage('build with kinako'){
            steps {
                withKubeCredentials([
                    [credentialsId: 'jenkins-robot', namespace:'pg-dev']
                    ]){
                    sh 'uname -a'
                    sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'  
                    sh 'chmod u+x ./kubectl'  
                    sh './kubectl apply -f kaniko.yaml'
                    sh 'sleep 400'
                    sh './kubectl delete pod \$(./kubectl get pods -n pg-dev | grep Completed | awk \'{print $1}\')'
                }
            }
        }
        stage('run kubectl'){
            steps {
                withKubeCredentials([
                    [credentialsId: 'jenkins-robot', namespace:'pg-dev']
                    ]){
                    sh './kubectl rollout restart -n pg-dev deployment pg-deployment-web'
                }
            }
        }
    }
}

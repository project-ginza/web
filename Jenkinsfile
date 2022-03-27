pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
          name: kaniko-pg-web
          namespace: pg-dev
        spec:
          containers:
          - name: kaniko-pg-web
            image: gcr.io/kaniko-project/executor:latest
            args: ["--context=git://github.com/project-ginza/web",
                    "--destination=mgood2/pg-web"]
            volumeMounts:
              - name: kaniko-secret
                mountPath: /kaniko/.docker
          restartPolicy: Never
          volumes:
            - name: kaniko-secret
              secret:
                secretName: docker-credentials
                items:
                  - key: .dockerconfigjson
                    path: config.json
        '''
    }
  }
  stages {
    stage('restart container'){
      steps {
        container('kaniko-pg-web') {
          sleep 300
        }
      }
    }
  }
}

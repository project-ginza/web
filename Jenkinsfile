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
          ---
          apiVersion: v1
          kind: Pod
          metadata:
            name: pod-pg-web
            namespace: pg-dev
            labels:
              category: pg-web
          spec:
            containers:
            - name: container
              image: mgood2/pg-web
        '''
    }
  }
  stages {
    stage('restart container'){
      steps {
        container('container') {
          echo 'hello'
        }
      }
    }
  }
}

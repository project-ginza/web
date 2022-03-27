pipeline {
  agent kubernetes
  
  stage('test pipeline') {
    sh (script:"""
      echo "hello"
      kubectl get no
      """)
  }
}

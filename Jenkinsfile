pipeline {
  agent any
  stage('test pipeline') {
    sh (script:"""
      echo "hello"
      kubectl get no
      """)
  }
}

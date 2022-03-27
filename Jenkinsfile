node('jenkins-slave') {
  stage('test pipeline') {
    sh (script:"""
      echo "hello"
      kubectl get no
      """)
  }
}

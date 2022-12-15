pipeline {
    stages{
        def app
        stage('Clone repository') {
            git 'https://github.com/unhy55/CICD.git'
        }
        stage('Build image') {
            app = docker.build("hhs535/cicd:${env.BUILD_ID}")
        }
        stage('Push image') {
            docker.withRegistry('https://registry.hub.docker.com', 'hhs535') {
                app.push("${env.BUILD_ID}")
                app.push("latest")
            }
        }
    }
}
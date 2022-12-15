pipeline{
    agent any
    stages{
        stage('git clone'){
            steps{
                git 'https://github.com/unhy55/CICD.git'
            }
        }
        stage('Build image'){
            steps{
                script{
                    app = docker.build("hhs535/cicd:${env.BUILD_ID}")
                }
            }
        }
        stage('Push image'){
            when{
                branch 'main'
            }
            steps{
                script{
                    docker.withRegistry('https://registry.hub.docker.com', 'hhs535'){
                        app.push("${env.BUILD_ID}")
                        app.push("latest")
                    }
                }
            }
        }
    }
}
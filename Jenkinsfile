pipeline{
    agent any
    stages{
        stage('git clone'){
            steps{
                git 'https://github.com/unhy55/CICD.git'
            }
        }
        stage('Docker Rm') {
            steps {
                sh """
                docker stop cicd-test
                docker rm -f cicd-test
                """
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
                branch 'master'
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
        stage('Deploy') {
            when{
                branch 'master'
            }
            steps {
                sh "docker run --name cicd-test -d -p 80:3000 hhs535/cicd:${env.BUILD_ID}"
            }
        }
    }
}
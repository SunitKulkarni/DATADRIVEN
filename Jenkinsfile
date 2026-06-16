pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    environment {
        CI = 'true'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // --with-deps pulls in required OS-level libraries on Linux agents.
                // Drop --with-deps if your agent doesn't allow sudo / apt installs.
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                // catchError lets the build continue to the reporting stage and
                // shows as UNSTABLE (not a hard failure) when tests fail,
                // so you still get a report instead of a broken pipeline.
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            // Playwright's own HTML report + raw results, archived as build artifacts
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true

            // Allure report - requires the Allure Jenkins Plugin + an Allure
            // Commandline tool configured under Manage Jenkins > Tools.
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }

        failure {
            echo 'Pipeline failed before tests could complete - check the console log above.'
        }

        unstable {
            echo 'Tests ran but some failed - check the Allure report or playwright-report for details.'
        }
    }
}

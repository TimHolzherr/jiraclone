# Jira Clone 

Create tickets and resolve them once they are done: https://jiraclone.azurewebsites.net.  
An exercise which was part of a job interview.

## Overview

* Backend
  * Simple rest api with Asp.Net Core 3
  * Inmemory database
* Client
  * React SPA created with create-react-app
  * Ui components from @material-ui
* DevOps
  * Built and hosted inside docker
  * Deployed to Azure as a web app service

## Build and Run

```
docker-compose build
docker-compose up 
```

## Build and Deploy

```
docker-compose build
docker push timholzherr/jiraclone
```
A webhook will automatically deploy the newest version from dockerhub to azure at https://jiraclone.azurewebsites.net

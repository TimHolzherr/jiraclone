# Jira Clone 

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

## Dependencies

* Asp.Net Core 3 Preview5
* .Net Core 3
* Docker
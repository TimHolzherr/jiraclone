# To run docker containers solo: (best for one of jobs)

az container create --resource-group jira-clone-docker --name docker --image timholzherr/jiraclone --dns-name-label docker-clone --ports 80

az container show --resource-group jira-clone-docker --name docker --query "{FQDN:ipAddress.fqdn,ProvisioningState:provisioningState}" --out table

az container logs --resource-group jira-clone-docker --name docker

az container attach --resource-group myResourceGroup --name mycontainer

az container delete --resource-group jira-clone-docker --name docker


# For webapps use a webapp app service supporting docker
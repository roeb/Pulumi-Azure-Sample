KEYS=$(az storage account keys list --account-name pulumideployment --resource-group Deployment --output json)
export AZURE_STORAGE_ACCOUNT="pulumideployment"
export AZURE_STORAGE_KEY=$(echo \$KEYS | jq -r '.[0].value')

//Only one time
az storage container create --name state

pulumi login azblob://cycling-app-deployment

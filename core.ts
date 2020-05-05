import * as azure from '@pulumi/azure';
import * as config from './config';

// Create an Azure resource (Storage Account)
export const account = new azure.storage.Account('storage', {
  // The location for the storage account will be derived automatically from the resource group.
  name: 'cyclingtrackstorage',
  resourceGroupName: config.resourceGroup.name,
  accountTier: 'Standard',
  accountReplicationType: 'LRS',
});

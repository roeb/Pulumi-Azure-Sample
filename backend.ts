import * as azure from '@pulumi/azure';
import * as azuread from '@pulumi/azuread';
import * as config from './config';

const tenantId = azuread.getClientConfig();

export const keyVault = new azure.keyvault.KeyVault('keyvault', {
  resourceGroupName: config.resourceGroup.name,
  location: config.resourceGroup.location,
  skuName: 'standard',
  tenantId: tenantId.then((e) => e.tenantId),
});

import * as azure from '@pulumi/azure';
import * as config from './config';

export const databaseServer = new azure.mssql.Server('mssqlserver', {
  resourceGroupName: config.resourceGroup.name,
  location: config.resourceGroup.location,
  administratorLogin: 'cyclingAdmin',
  administratorLoginPassword: 'YC2ynZwugPwzgiu8X9q!eB28azyhiHqF',
  version: '12.0',
  publicNetworkAccessEnabled: true,
});

export const cyclingDatabase = new azure.mssql.Database('cyclingDatabase', {
  serverId: databaseServer.id,
  maxSizeGb: 1,
  licenseType: 'BasePrice',
  skuName: 'Basic',
  name: 'cyclingdb-' + config.stack,
});

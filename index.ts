import { account } from './core';
import { appServicePlan } from './frontend';
import { databaseServer, cyclingDatabase } from './database';
import { keyVault } from './backend';

export const connectionString = account.primaryConnectionString;
export const appServicePlanName = appServicePlan.name;
export const databaseServerName = databaseServer.name;
export const cyclingDatabaseName = cyclingDatabase.name;
export const keyVaultName = keyVault.name;

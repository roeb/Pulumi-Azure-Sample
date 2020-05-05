import * as azure from '@pulumi/azure';
import * as config from './config';
import { Kinds } from '@pulumi/azure/appservice';

export const appServicePlan = new azure.appservice.Plan('appserviceplan', {
  resourceGroupName: config.resourceGroup.name,
  location: config.resourceGroup.location,
  kind: Kinds.Windows,
  sku: {
    size: 'F1',
    tier: 'Free',
    capacity: 0,
  },
});

export const appInsightFrontend = new azure.appinsights.Insights('insightsFrontend', {
  resourceGroupName: config.resourceGroup.name,
  location: config.resourceGroup.location,
  applicationType: 'web',
  retentionInDays: 30,
});

export const appServiceFrontend = new azure.appservice.AppService('appservicefrontend', {
  resourceGroupName: config.resourceGroup.name,
  location: config.resourceGroup.location,
  appServicePlanId: appServicePlan.id,
  name: 'fronted-webapp-' + config.stack,
  siteConfig: {
    http2Enabled: true,
    remoteDebuggingEnabled: true,
    remoteDebuggingVersion: 'VS2017',
    use32BitWorkerProcess: true,
  },
  appSettings: {
    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightFrontend.instrumentationKey,
  },
});

// Copyright 2016-2019, Pulumi Corporation.  All rights reserved.

import * as azure from '@pulumi/azure';
import * as pulumi from '@pulumi/pulumi';

// Parse and export configuration variables for this stack.
const config = new pulumi.Config();

//resource group settings
export const rgName = config.require('resourceGroup');
export const location = config.require('location');
export const stack = config.require('stack');

export const resourceGroup = new azure.core.ResourceGroup(rgName, {
  location,
  name: rgName,
});

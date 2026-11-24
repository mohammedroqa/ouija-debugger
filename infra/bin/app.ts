#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { OuijaStack } from '../lib/ouija-stack';

const app = new cdk.App();
const stack = new OuijaStack(app, 'OuijaStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
cdk.Tags.of(stack).add('project', 'ouija-debugger');

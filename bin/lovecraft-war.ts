#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LovecraftWarStack } from '../lib/lovecraft-war-stack';
import { environments } from "../environments/config";


const app = new cdk.App();
const envConfig = environments.dev; // Cambiar según el ambiente

new LovecraftWarStack(app, 'LovecraftWarStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: envConfig.region,
  },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
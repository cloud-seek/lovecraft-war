import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { createS3Bucket } from "./s3";
import { createKnowledgeBase } from "./bedrock";
import { environments } from "../environments/config";

export class LovecraftWarStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const envConfig = environments.dev; // Cambiar según el ambiente

    const s3BucketKB = createS3Bucket(this, envConfig.s3BucketName);
    createKnowledgeBase(
      this, s3BucketKB, envConfig.pineconeApiKeyArn, envConfig.pineconeEndpoint
    );
  }
}

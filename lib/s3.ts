import * as s3 from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export function createS3Bucket(scope: Construct, bucketName: string): s3.Bucket {
  return new s3.Bucket(scope, "KnowledgeBaseBucket", {
    bucketName,
    lifecycleRules: [
      {
        id: "IntelligentTieringRule",
        enabled: true,
        transitions: [
          {
            storageClass: s3.StorageClass.INTELLIGENT_TIERING,
            transitionAfter: cdk.Duration.days(0),
          },
        ],
      },
    ],
  });
}

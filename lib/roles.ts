import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export function createRole(scope: Construct) {
  return new iam.Role(scope, "KnowledgeBaseAccessRole", {
    assumedBy: new iam.ServicePrincipal("bedrock.amazonaws.com"),
    inlinePolicies: {
      SecretsManagerAccessPolicy: new iam.PolicyDocument({
        statements: [
          new iam.PolicyStatement({
            actions: ["secretsmanager:GetSecretValue"],
            resources: ["*"],
          }),
        ],
      }),
    },
  });
}

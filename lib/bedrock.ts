
import { pinecone, bedrock } from "@cdklabs/generative-ai-cdk-constructs";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";

export function createKnowledgeBase(
  scope: Construct,
  bucket: s3.Bucket,
  pineconeApiKeyArn: string,
  pineconeEndpoint: string
) {
  
  const pineconeds = new pinecone.PineconeVectorStore({
    connectionString: pineconeEndpoint,
    credentialsSecretArn: pineconeApiKeyArn,
    textField: "content",
    metadataField: "metadata",
  });

  const kb = new bedrock.KnowledgeBase(scope, "KnowledgeBase", {
    vectorStore: pineconeds,
    embeddingsModel: bedrock.BedrockFoundationModel.TITAN_EMBED_TEXT_V1,
    instruction: "Use this knowledge to respond with spells and Lovecraftian knowledge.",
  });

  new bedrock.S3DataSource(scope, "DataSource", {
    bucket: bucket,
    knowledgeBase: kb,
    dataSourceName: "spells",
    chunkingStrategy: bedrock.ChunkingStrategy.FIXED_SIZE,
  });

}

export const environments = {
    dev: {
      envName: "dev",
      region: "us-east-1",
      pineconeApiKeyArn: "arn:aws:secretsmanager:us-east-1:851725388367:secret:vectordb-secret-WifH00",
      s3BucketName: "knowledgebase-data-source-dev",
      bedrockEmbeddingModelArn: "arn:aws:bedrock:us-east-1:851725388367:model/amazon.titan-embedding",
      pineconeEndpoint: "https://lovecraft-war-95xdbi8.svc.aped-4627-b74a.pinecone.io",
    },
    prod: {
      envName: "prod",
      region: "us-east-1",
      pineconeApiKeyArn: "arn:aws:secretsmanager:us-east-1:851725388367:secret:vectordb-secret-WifH00",
      s3BucketName: "knowledgebase-data-source-prod",
      bedrockEmbeddingModelArn: "arn:aws:bedrock:us-east-1:851725388367:model/amazon.titan-embedding",
      pineconeEndpoint: "https://lovecraft-war-95xdbi8.svc.aped-4627-b74a.pinecone.io",
    },
  };
  
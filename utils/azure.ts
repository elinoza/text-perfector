"use server";

import { createAzure } from "@ai-sdk/azure";

const azure = createAzure({
  resourceName: process.env.AZURE_OPENAI_RESOURCE_NAME, // Azure resource name
  apiKey: process.env.AZURE_OPENAI_API_KEY,
});
export default azure;

"use server";

import { createAzure } from "@ai-sdk/azure";

const azure = createAzure({
  resourceName: "cloock-ai", // Azure resource name
  apiKey: process.env.AZURE_OPENAI_API_KEY,
});
export default azure;

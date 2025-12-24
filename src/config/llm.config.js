import "dotenv/config";

export const llmConfig = {
  provider: process.env.LLM_PROVIDER,
  apiKey: process.env.LLM_API_KEY,
  model: process.env.LLM_MODEL,
};

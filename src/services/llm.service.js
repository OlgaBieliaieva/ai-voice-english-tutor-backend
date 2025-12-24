import Groq from "groq-sdk";
import { llmConfig } from "../config/llm.config.js";

let client;

if (llmConfig.provider === "groq") {
  client = new Groq({
    apiKey: llmConfig.apiKey,
  });
} else {
  throw new Error(`Unsupported LLM provider: ${llmConfig.provider}`);
}

export async function sendPrompt(message) {
  try {
    const response = await client.chat.completions.create({
      model: llmConfig.model,
      messages: [
        {
          role: "system",
          content:
            "You are an English conversation tutor. Reply in clear, simple English.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("[LLM SERVICE ERROR]", error);
    throw new Error("Failed to get response from LLM");
  }
}

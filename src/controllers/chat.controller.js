import { sendPrompt } from "../services/llm.service.js";

export async function chatController(req, res) {
  try {
    const { message } = req.body;

    // 1. Validation
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required and must be a string",
      });
    }

    // 2. Call LLM
    const reply = await sendPrompt(message);

    // 3. Response
    return res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error("[CHAT CONTROLLER ERROR]", error);

    return res.status(500).json({
      error: "Failed to process chat message",
    });
  }
}

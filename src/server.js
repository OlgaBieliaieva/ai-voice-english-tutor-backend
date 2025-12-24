import app from "./app.js";
import { sendPrompt } from "./services/llm.service.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

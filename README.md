# AI Voice English Tutor - Backend

🎯 **Purpose**  
Node.js + Express backend for AI Voice English Tutor. Provides REST API endpoints for text and voice-based conversation with AI, including grammar feedback.

---

## ✨ Features

- Chat API (`/api/chat`) for sending user messages
- Integration with LLM (Llama 3 via Groq)
- Returns AI reply + grammar feedback
- Works with frontend MVP

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **LLM:** Llama 3 (via Groq SDK)
- **Environment:** `.env` configuration for API keys and ports
- **Speech:** Browser-native APIs handled by frontend

---

## 📌 Status

✅ MVP completed

---

## 🚀 Local Setup

1. Clone the backend repository:

```bash
git clone https://github.com/OlgaBieliaieva/ai-voice-english-tutor-backend.git
cd ai-voice-english-tutor-backend
```

2. Install dependencies:

```
npm install
```

3. Create `.env` from example:

```
cp .env.example .env
```

4. Fill `.env` with your API key and configuration:

```
PORT=3000
LLM_PROVIDER=groq
LLM_API_KEY=your_api_key_here
LLM_MODEL=llama-3.1-8b-instant
```

5. Start backend server:

```
npm run dev
```

Server will run on `http://localhost:3000` .

## 🔗 Backend API

### POST `/api/chat`

Sends user message to the LLM with a grammar-feedback prompt.

#### Request

```json
{
  "message": "I has been learning English for two years"
}
```

#### Response

```json
{
  "reply": "REPLY:\nThat's great! Keep practicing!\n\nFEEDBACK:\n- Mistake: I has been\n  Correction: I have been\n  Explanation: Use 'have' with 'I'"
}
```

#### ℹ️ Notes

- Backend does not parse or transform the LLM output
- The response format is defined by the prompt
- Parsing and UI rendering are handled on the frontend

## 🔗 Connecting Frontend

1. Clone and run the frontend repo:

```bash
git clone https://github.com/OlgaBieliaieva/AI-voice-english-tutor-client.git
cd AI-voice-english-tutor-client
npm install
npm run dev
```

2. Make sure frontend `.env` or API configuration points to `http://localhost:3000/api/chat` .

## 👉 Testing

- Use the frontend to send messages and receive AI replies.
- Verify grammar feedback is returned correctly.
- Check that TTS works with AI replies.

## 📄 License

MIT

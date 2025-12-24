# Chat API — Text-based Conversation

This document describes the backend API contract for text-based interaction with an AI tutor.
The API enables sending a user message and receiving an AI-generated reply for English conversation practice.

---

## Endpoint

### `POST /api/chat`

Send a user message to the AI tutor and receive a response.

---

## Request

### Headers

#### Content-Type: application/json

```

<!-- Body -->

json
{
  "message": "Hi! I want to practice English.",
  "userId": "user-123",
  "conversationId": "conv-001"
}


```

### Fields

| Field            | Type   | Required | Description                                       |
| ---------------- | ------ | -------- | ------------------------------------------------- |
| `message`        | string | ✅ yes   | User message text sent to the AI                  |
| `userId`         | string | ❌ no    | Identifier of the user                            |
| `conversationId` | string | ❌ no    | Identifier of the conversation (used for context) |

## Response

### Success — 200 OK

```json
{
  "reply": "Great! Let's practice. What topic would you like to talk about?",
  "conversationId": "conv-001",
  "timestamp": "2025-12-24T10:15:00Z"
}
```

### Fields

| Field            | Type              | Description                          |
| ---------------- | ----------------- | ------------------------------------ |
| `reply`          | string            | AI-generated response                |
| `conversationId` | string            | Conversation identifier              |
| `timestamp`      | string (ISO 8601) | Time when the response was generated |

### Error Responses

`400 Bad Request`

Returned when the request payload is invalid.

```json
{
  "error": "Message is required"
}
```

`500 Internal Server Error`

Returned when the AI service is unavailable or an unexpected error occurs.

```json
{
  "error": "AI service unavailable"
}
```

## Notes

- This API is designed for text-based conversation only (voice support will be added later).
- Conversation context handling is minimal for MVP.
- The AI behaves as an English conversation tutor.
- The LLM provider implementation is abstracted and can be changed later without breaking the API contract.

## Example cURL Request

```bash

curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Let’s practice English",
    "userId": "user-123",
    "conversationId": "conv-001"
  }'

```

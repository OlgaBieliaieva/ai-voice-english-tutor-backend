import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.routes.js";

const app = express();

/**
 * CORS configuration
 * Allows requests only from frontend application
 */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Chat endpoint
app.use("/api/chat", chatRouter);

export default app;

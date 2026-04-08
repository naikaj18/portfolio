# Portfolio AI Chatbot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a RAG-style AI chatbot to the portfolio site so visitors can ask questions about Naikaj, powered by Gemini's free API via a Vercel serverless function.

**Architecture:** A floating chat widget (bottom-right) sends user messages to a Vercel API route (`/api/chat`). The API route injects all portfolio content (from `constants/index.js`) as system context into a Gemini 1.5 Flash prompt, then streams the response back. No vector DB needed — the full portfolio context fits easily in a single prompt.

**Tech Stack:** React, Tailwind CSS, Framer Motion, Google Generative AI SDK (`@google/generative-ai`), Vercel Serverless Functions

---

## File Structure

| File | Responsibility |
|------|----------------|
| `api/chat.js` | Vercel serverless function — receives user message, calls Gemini with portfolio context, streams response |
| `src/components/Chatbot.jsx` | Floating chat widget UI — toggle button, message list, input, streaming display |
| `src/App.jsx` | Modified — add `<Chatbot />` component |
| `vercel.json` | Vercel config for serverless function routing |
| `.env.example` | Documents required `GEMINI_API_KEY` env var |

---

### Task 1: Vercel Serverless API Route

**Files:**
- Create: `api/chat.js`
- Create: `vercel.json`
- Create: `.env.example`

- [ ] **Step 1: Install Google Generative AI SDK**

```bash
cd /Users/naikaj/Work/Projects/Portfolio/portfolio
npm install @google/generative-ai
```

- [ ] **Step 2: Create the portfolio context string**

Create `api/chat.js` with the full portfolio content baked in as a system prompt. This is the "RAG" — all of Naikaj's info is context-stuffed into the system message.

```js
// api/chat.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const PORTFOLIO_CONTEXT = `You are an AI assistant on Naikaj Shiradkar's portfolio website. Answer questions about Naikaj based ONLY on the following information. Be concise, friendly, and professional. If asked something not covered below, say you don't have that information and suggest contacting Naikaj directly at naikaj18@gmail.com.

---

ABOUT:
Naikaj is an AI, Cloud & Full Stack Engineer based in San Francisco, California. He builds production AI systems and full-stack applications — RAG pipelines, agentic frameworks, and cloud infrastructure — hardened for security, wired for observability, and built to scale.

He has end-to-end ownership across the stack — from React frontends and FastAPI backends to AWS CDK infrastructure. He holds an MS in Computer Science (3.74 GPA) from Cal State Fullerton and an AWS Certified Developer – Associate credential.

EXPERIENCE:

1. AI / Cloud Engineer at Auto Club Enterprises (AAA) — Jun 2025 to Present (Contractor)
   - Architected production AI chatbots for insurance and emergency roadside services on AWS Bedrock
   - Engineered semantic caching within Lambda-backed Bedrock invocation flows
   - Built end-to-end observability infrastructure using AWS CDK, CloudWatch, CloudTrail, and SNS
   - Provisioned cloud infrastructure via AWS CDK and YAML-based CI/CD pipelines
   - Tech: AWS Cloud, Python, AWS Bedrock, RAG, Strands Agents, AWS CDK, DynamoDB

2. AI / Full Stack Developer at Dreamline AI — Jun 2024 to Jun 2025
   - Built and deployed a RAG Q&A chatbot for the GreenZone Mapping platform using OpenAI embeddings, FAISS, and Mistral 7B on SageMaker
   - Owned the full stack: React frontend, FastAPI backend, AWS infrastructure
   - Designed SQL Server schema for cross-domain analytics
   - Tech: Python, FastAPI, React, AWS SageMaker, FAISS, OpenAI

3. Senior Software Developer at Capgemini — Jan 2020 to Jul 2022
   - Optimized 100+ enterprise database objects, reducing query time by 25%
   - Delivered full-stack analytics dashboard (Django REST + React on AWS EC2)
   - Won STAR and XTRA MILE awards
   - Tech: Python, Django, React, PostgreSQL, SQL, PL/SQL

SKILLS:
- Languages & Frameworks: Python, React.js, TypeScript, JavaScript, FastAPI, Django, SQL, PL/SQL, React Native, Tailwind CSS
- AI / ML: AWS Bedrock, Strands Agents, RAG Pipelines, Prompt Engineering, FAISS, SageMaker, Scikit-learn, NumPy, Pandas, NLP
- Cloud & DevOps: AWS CDK, Lambda, DynamoDB, CloudWatch, S3, Step Functions, Docker, CI/CD, GitHub, Linux

PROJECTS:

1. HealthForge — Serverless Health Analytics Pipeline
   Serverless pipeline on AWS that ingests Apple Health data, computes weighted health scores, generates AI insights via Gemini Flash, and delivers HTML dashboard emails weekly. Built on AWS free tier.
   Tech: AWS CDK, Lambda, Step Functions, DynamoDB, SES, API Gateway, SQS, Python, Gemini

2. Mailliam — AI-Powered Email Summarization Assistant
   Personal AI assistant that connects to Gmail via OAuth, fetches and classifies emails, and generates RAG summaries using context-aware LLM prompting.
   Tech: Python, FastAPI, React, LLMs, Gmail API, Supabase, RAG

3. Masmovil — IFS Financials ERP Application
   Enterprise ERP development for Spain's fourth-largest telecom. Designed and optimized 100+ database objects and built PL/SQL APIs.
   Tech: SQL, PL/SQL, Oracle, ERP, APIs

4. Trade What You Read — Google's Startup Weekend, 3rd Place
   Peer-to-peer book trading platform prototyped in 54 hours.

CONTACT:
- Location: San Francisco, California
- Phone: +1 (657) 525-9667
- Email: naikaj18@gmail.com
- LinkedIn: linkedin.com/in/naikaj
- GitHub: github.com/naikaj18
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: "What can you tell me about Naikaj?" }] },
        { role: "model", parts: [{ text: "I'm Naikaj's portfolio assistant! I can answer questions about his experience, skills, projects, education, and contact info. What would you like to know?" }] },
        ...(history || []),
      ],
      systemInstruction: PORTFOLIO_CONTEXT,
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return res.status(200).json({ reply: response });
  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ error: "Failed to generate response" });
  }
}
```

- [ ] **Step 3: Create vercel.json**

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" }
  ]
}
```

- [ ] **Step 4: Create .env.example**

```
GEMINI_API_KEY=your_gemini_api_key_here
```

- [ ] **Step 5: Commit**

```bash
git add api/chat.js vercel.json .env.example
git commit -m "feat: add Vercel serverless Gemini chat API route"
```

---

### Task 2: Chatbot UI Component

**Files:**
- Create: `src/components/Chatbot.jsx`

- [ ] **Step 1: Create the Chatbot component**

A floating chat widget with:
- A toggle button (bottom-right corner, fixed position)
- An expandable chat panel with message list + input
- Typing indicator while waiting for response
- Dark mode support matching the site's existing design tokens
- Framer Motion for open/close animation

```jsx
// src/components/Chatbot.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const SUGGESTIONS = [
  "What does Naikaj do?",
  "Tell me about his projects",
  "What are his skills?",
  "How can I contact him?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey! I'm Naikaj's portfolio assistant. Ask me anything about his experience, skills, or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      // Build history for Gemini (skip the initial greeting)
      const history = messages.slice(1).map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.text }],
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: "Sorry, I couldn't process that. Try again!" },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const showSuggestions = messages.length === 1 && !loading;

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-black shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] rounded-2xl border border-[#d2d2d7] dark:border-[#3a3a3c] bg-[#f5f5f7] dark:bg-[#1c1c1e] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-[#d2d2d7] dark:border-[#3a3a3c] bg-white/60 dark:bg-white/5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                Ask about Naikaj
              </p>
              <p className="text-xs text-[#6e6e73] dark:text-[#98989d]">
                Powered by AI — knows everything on this site
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-black rounded-br-md"
                        : "bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#e8e8ed] dark:border-[#3a3a3c] rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-white dark:bg-white/10 border border-[#e8e8ed] dark:border-[#3a3a3c]">
                    <Loader2 size={16} className="animate-spin text-[#6e6e73] dark:text-[#98989d]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {showSuggestions && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#d2d2d7] dark:border-[#3a3a3c] bg-white dark:bg-white/5 text-[#6e6e73] dark:text-[#98989d] hover:border-[#1d1d1f] dark:hover:border-white/30 hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#d2d2d7] dark:border-[#3a3a3c] bg-white/60 dark:bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 text-sm bg-transparent outline-none placeholder:text-[#98989d] text-[#1d1d1f] dark:text-[#f5f5f7]"
                  disabled={loading}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className="p-2 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-black disabled:opacity-30 hover:bg-[#3d3d3f] dark:hover:bg-[#e5e5e7] transition-colors duration-200"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Chatbot.jsx
git commit -m "feat: add Chatbot UI component with suggestions and dark mode"
```

---

### Task 3: Wire Chatbot into App

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add Chatbot to App.jsx**

Add import at top:
```jsx
import Chatbot from "./components/Chatbot"
```

Add `<Chatbot />` just before the closing `</div>` of the root element (outside `<main>`, since it's fixed-position):
```jsx
      </main>
      <Chatbot />
    </div>
```

- [ ] **Step 2: Verify dev server runs**

```bash
npm run dev
```

Open browser and verify the chat button appears bottom-right.

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "feat: integrate chatbot widget into main app"
```

---

### Task 4: Local Dev Setup & Vercel Deployment Config

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add .env to .gitignore**

Ensure `.env` and `.env.local` are in `.gitignore`:
```
.env
.env.local
```

- [ ] **Step 2: Create local .env file for testing**

```bash
cp .env.example .env
```

Then add your actual Gemini API key to `.env`. Get a free key from https://aistudio.google.com/apikey.

- [ ] **Step 3: Install Vercel CLI for local testing**

```bash
npm i -g vercel
```

- [ ] **Step 4: Test locally with Vercel dev**

```bash
vercel dev
```

This runs the Vite frontend + serverless functions together locally. Open the app, click the chat button, and test a question.

- [ ] **Step 5: Commit and deploy**

```bash
git add .gitignore
git commit -m "chore: add env files to gitignore"
```

To deploy: push to GitHub, connect repo to Vercel, add `GEMINI_API_KEY` as an environment variable in Vercel dashboard.

---

### Task 5: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Add chatbot section to CLAUDE.md**

Add after the Deployment section:

```markdown
## Chatbot

A floating AI chatbot (bottom-right) lets visitors ask questions about Naikaj. Architecture:

- **Frontend:** `src/components/Chatbot.jsx` — floating chat widget with suggestions, dark mode, message history
- **Backend:** `api/chat.js` — Vercel serverless function that calls Gemini 1.5 Flash with portfolio context stuffed into the system prompt
- **Config:** `vercel.json` routes `/api/*` to serverless functions
- **API Key:** `GEMINI_API_KEY` env var (set in Vercel dashboard, locally in `.env`)
- **No vector DB** — all portfolio content from `src/constants/index.js` is baked into the system prompt in `api/chat.js`. If you update portfolio content in constants, also update the context string in `api/chat.js`.
```

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: add chatbot architecture to CLAUDE.md"
```

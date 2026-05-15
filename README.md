# GainzGPT

AI-powered gym coach with the energy of a jacked circus clown. Built as part of the [AI Engineer Challenge](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge).

## Stack

| Layer | Tech |
|-------|------|
| LLM | OpenAI `gpt-5-nano-2025-08-07` |
| Backend | FastAPI (Python 3.12, managed by `uv`) |
| Frontend | Next.js 16 + Tailwind CSS |
| Deployment | Vercel |

## Quick Start

### Prerequisites

- [uv](https://github.com/astral-sh/uv) (Python package manager)
- Node.js 20+
- OpenAI API key

### Backend

```bash
# Install dependencies (downloads Python 3.12 automatically)
uv sync

# Create .env with your key
echo "OPENAI_API_KEY=sk-..." > .env

# Start server (http://localhost:8000)
uv run uvicorn api.index:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# -> http://localhost:3000
```

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/chat` | Streaming chat (`{"message": "..."}`) |

## Project Structure

```
api/
  index.py            # FastAPI backend with streaming
frontend/
  src/app/
    page.tsx          # Chat UI
    layout.tsx        # App layout
    globals.css       # Styles
  src/assets/
    logo.png          # GainzGPT logo
.env                  # API key (gitignored)
pyproject.toml        # Python deps
vercel.json           # Deploy config
```

---


<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  <!-- Write your answer here -->

**Response:**  
<!-- Add your app's response here -->

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:**  

**Response:**  
<!-- Add your app's response here -->

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  <!-- Write your answer here -->

**Response:**  
<!-- Add your app's response here -->

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  <!-- Write your answer here -->

**Response:**  
<!-- Add your app's response here -->

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  
**Aspect Tested:**  <!-- Write your answer here -->

**Response:**  
<!-- Add your app's response here -->

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
<!-- Write your answer here -->

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
<!-- Write your answer here -->

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
<!-- Write your answer here -->

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```

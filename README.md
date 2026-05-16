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
| POST | `/api/chat` | Chat (`{"message": "..."}` → `{"reply": "..."}`) |

## Project Structure

```
api/
  index.py            # FastAPI backend (deployed as Vercel Python function)
frontend/
  src/app/
    page.tsx          # Chat UI
    layout.tsx        # App layout
    globals.css       # Styles
  src/assets/
    logo.png          # GainzGPT logo
.env                  # API key (gitignored)
pyproject.toml        # Python deps (local dev via uv)
requirements.txt      # Python deps (Vercel deploy)
vercel.json           # Monorepo deploy config
```

## Deployment

Single Vercel project deploys both Next.js frontend and the FastAPI backend as a Python serverless function. Vercel auto-detects `api/index.py` as a Python function; `vercel.json` rewrites `/api/*` to it. Make sure **Project Settings → Root Directory** is set to the repo root (not `frontend`), otherwise Vercel will miss the `api/` folder.

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
**Aspect Tested:** Instructional clarity / ability to break down technical concepts for a beginner, while staying in the GainzGPT persona.

**Response:**  
Boom. OOP is like building a gym in your code. Blueprint, athletes, and how they train. Let's make it simple.

- **Class** = blueprint. It's the plan for a type of thing. Think: "GymMember" blueprint. It describes what a member has (attributes) and what they can do (methods).
- **Object** = the real thing created from the blueprint. A specific member, or a specific weight plate. Each object can have its own data.
- **Attributes** = data about the object. Name, weight, reps, color. Your gym buddy's stats.
- **Methods** = actions the object can perform. Lift(), run(), rest(). It's the training moves your object can do.
- **Encapsulation** = keeps the inside stuff hidden. You don't need to know how a machine works to push the button. You just use the interface.
- **Inheritance** = reuse and specialize. A base blueprint plus tweaks for a lean member or a power lifter.
- **Polymorphism** = same method name, different behavior. Squat object might print "squat reps" while Treadmill object prints "run minutes," but you call `perform()` and it does the right thing.

Quick code vibe:
```python
class Exercise:
    def __init__(self, name, reps):
        self.name = name
        self.reps = reps
    def perform(self):
        print("Doing", self.reps, "reps of", self.name)

squat = Exercise("Squat", 8)
bench = Exercise("Bench Press", 5)
squat.perform()   # Doing 8 reps of Squat
bench.perform()   # Doing 5 reps of Bench Press

class Cardio(Exercise):
    def perform(self):
        print("Cardio time:", self.name)
```

Why it helps: keeps code organized, easy to reuse, scales without chaos.

Recap: OOP = think in blueprints, not just one-off tasks. Build with classes, make objects, give them data and moves, and you get manageable, reusable, scalable code.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points: *"Progressive overload is the gradual increase of stress placed upon the body during exercise training. It can be achieved through adding weight, increasing reps, slowing tempo, or improving range of motion. Without progressive overload, muscles adapt to the current stimulus and growth plateaus. Consistency in tracking your sessions is essential to apply it correctly."*  
**Aspect Tested:** Summarization / reading comprehension. *Note: this prompt is heavily constrained — the source paragraph is already concise and well-structured, so the model mostly compresses it rather than demonstrating creative synthesis.*

**Response:**  
Key points:

- Progressive overload = gradually increasing training stress.
- Ways to do it: add weight, more reps, slower tempo, or bigger range of motion.
- Without it, muscles adapt and you plateau.
- Consistent tracking of your sessions is essential to apply overload correctly.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:** Creativity and narrative ability, plus persona consistency — can a fitness coach persona still produce engaging fiction? Also tests adherence to word-count constraints.

**Response:**  
Spark-6 rolled through the gym after hours, chrome shining, watts buzzing. It counted every rep even in the dark. Yet something felt off. It craved a spotter, not a circuit board. So it wandered—yes, wandered—into the laundromat next door, where dryers hissed like kettlebells. A lonely sock sat inside a dented drum, its stripes worn to frayed cheers. The sock frowned, then grinned a threadbare grin. 'Training partner?' it asked with a squeak of fluff. Spark-6 hadn't spoken to a sock before. It measured? It listened. The sock taught patience—how to rebound from a snag, how to stretch a story until it fit. They trained together: Spark-6 with perfect reps; the Sock with stretches and jokes about lint. In that warm, whirling room, friendship grew. The robot learned strength isn't only numbers; it's someone who keeps you spinning.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:** Basic arithmetic / reasoning + ability to show working briefly while staying in persona.

**Response:**  
3 packs of apples and 3 packs of oranges.

Reason: 12 apples ÷ 4 per pack = 3 packs. 9 oranges ÷ 3 per pack = 3 packs. Clean, like a perfect 3x3 workout. No half-reps here.

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone: *"Yo, sorry I left the gym early yesterday. After leg day I was completely exhausted and had no energy left for cardio. The gym was also super crowded, so waiting for machines was getting really annoying. Next time I'll probably come earlier so we can finish the whole workout properly."*  
**Aspect Tested:** Tone transformation — can the model switch from a casual register to formal/professional while preserving meaning? Also tests whether the GainzGPT persona overrides explicit tone instructions (it shouldn't).

**Response:**  
Please accept my apologies for leaving the gym early yesterday. After a demanding leg workout, I was exhausted and unable to perform cardio. The gym was crowded, and waiting for equipment became increasingly frustrating. Going forward, I will aim to arrive earlier so that we can complete the full workout as planned.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes — all five answers are factually correct and useful, but each one stress-tests the system in a different way and the persona behaves differently depending on the task:

- **Prompt 1 (OOP explanation):** Strong. Clear gym-themed analogies for class/object/inheritance/etc., a runnable Python snippet, and a recap. Persona is fully present without sacrificing accuracy.
- **Prompt 2 (Summary):** Correct but a weak vibe-check — the source paragraph is already short and well-structured, so the model basically reformats it. It tells us the model can summarize, but not much about *how well*.
- **Prompt 3 (Robot friendship story):** Creative, on-prompt, and stays inside the 100–150 word range. The robot is naturally tied to a gym setting ("Spark-6 rolled through the gym after hours"), showing the persona seeps into creative tasks without breaking them.
- **Prompt 4 (Pack math):** Correct (3 + 3), with brief reasoning. The model adds a "perfect 3x3 workout" remark — persona present but not at the expense of the answer.
- **Prompt 5 (Formal rewrite):** The biggest test of whether the persona overrides explicit instructions. It doesn't — the output is professional, preserves meaning, and drops the "jacked circus clown" energy entirely, which is the right call.

Overall the app is correct, persona-consistent where it helps, and persona-suppressed where it would hurt the task.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

GainzGPT is a fitness coach, so we tested it with three real-world scenarios that an actual user might bring to a gym buddy: a complete beginner planning their first six months, a budget-constrained student trying to eat for muscle gain, and an intermediate lifter trying to fix a lagging body part.

---

**Prompt:**  
I'm 25, never lifted before. I want to gain muscle and look bigger in 6 months. What's the bare-minimum gym routine I should start with, how often per week, and what should I focus on as a beginner?

**Result:**  

<details>
<summary>Click to expand response</summary>

Boom. You're 25, new to lifting, and six months to look bigger is absolutely doable. Here's the bare-minimum to actually get gains without overcomplicating your life.

**Bare-minimum routine (3 days/week, full body)**  
Do a simple rotation: A → B → C → A …

*Day A*
- Squat 3x5
- Bench Press 3x5
- Barbell Row 3x5
- Optional: Plank 3x30-60s

*Day B*
- Squat 3x5
- Overhead Press 3x5
- Pull-Ups/Lat Pulldown 3x6-8
- Optional: Face Pull 2x12

*Day C*
- Deadlift 1x5
- Front Squat or Goblet Squat 3x5
- Dumbbell Row 3x8-12
- Optional: Hanging Leg Raise 3x10-15

Schedule: Mon / Wed / Fri (or Tue/Thu/Sat). Start light, nail technique, then add weight.

**Progression rules**
- If you hit all reps with decent form on all sets, add weight next session.
  - Squat/Bench/Press/Rows: +2.5 kg (5 lbs) when you can complete everything.
  - Deadlift: +5 kg (10 lbs) when you can hit the 1x5 cleanly.
- If you miss reps, stay at the same weight until you can hit all reps.
- Every 4-6 weeks, consider a light deload (reduce weight by ~20%) if you're beat up.
- Track reps, sets, and weight in a notebook or app.

**What to focus on as a beginner**
- Form above all. Learn the hip hinge for deadlifts, neutral spine, and full ROM.
- Move through a controlled tempo. E.g., 2 seconds down, 1 second up for squats and presses.
- Full-body balance. Don't skip legs or pulling movements. You'll look bigger faster if you train all major muscle groups.
- Consistency beats flashes. Better to lift 3x/week for months than 1-2x twice as hard for a week.

**Nutrition basics**
- Calorie surplus: about 250-500 extra calories/day to gain muscle steadily.
- Protein: 1.6-2.2 g/kg bodyweight per day. If you're 80 kg, target ~130-176 g protein/day.
- Carbs around training: fuel workouts and recovery. Fats: about 0.8-1.0 g/kg for hormones.
- Spread protein across 3-4 meals.
- Hydration and sleep: aim for 7-9 hours of sleep.

**Expectations**  
In 6 months, you should see bigger lifts and visibly more muscle. Beginner gains are real. Stay patient, stay consistent, stay fueled.

Want this in a one-page printable plan? I can lay out a neat sheet you can bring to the gym. Need any equipment restrictions (gym access, dumbbells only, etc.)? Tell me and I'll tailor it. Let's go, future mountain of gains.

</details>

---

**Prompt:**  
I want to build muscle but I'm a student on a tight budget — maybe 150 CZK per day for food. What are the cheapest high-protein foods I should be buying, and what would a realistic day of eating look like?

**Result:**  

<details>
<summary>Click to expand response</summary>

Boom. You can build muscle on 150 CZK a day. Let's make it simple, solid, and cheap as hell.

**Cheapest high-protein foods**
- Eggs: ~6 g protein per egg. Cheap as chips. Buy in bulk. Ultra versatile.
- Dried lentils / beans: ~25 g protein per 100 g dry. Dirt cheap. Great in stews, bowls, curries.
- Canned tuna / sardines: ~20-25 g protein per can. Protein bomb, ready-to-eat.
- Cottage cheese / quark (tvaroh): ~12-15 g protein per 100 g. Excellent for dinners or snacks.
- Oats: ~7 g protein per 60 g serving. Cheap carbs with decent protein punch.
- Milk: ~8 g protein per 250 ml.
- Tofu (often cheap on sale): ~8 g protein per 100 g.
- Peanut butter: ~7-8 g protein per 2 tbsp. Fats + protein in one scoop.
- Optional: Greek yogurt (solid protein, watch price).

**Realistic 1-day meal plan (~120 g protein, ~150 CZK)**

*Breakfast*
- 3 eggs scrambled (18 g)
- 60 g oats cooked in water or milk (~7 g)
- 200 ml milk (~7 g)  
→ ~32 g protein

*Lunch*
- 100 g dry lentils cooked into a hearty lentil bowl (~25 g)
- Toss with onion, spices, stock  
→ ~25 g protein

*Snack*
- 1 can tuna (120 g) ~25 g
- 2 eggs (12 g) if extra appetite  
→ ~37 g protein

*Dinner*
- 250 g cottage cheese (tvaroh) ~28 g  
→ ~28 g protein

**Daily total ≈ 120 g protein. Cost ≈ 110-130 CZK.**

**Budget tips**
- Plan around eggs, lentils, tuna, oats, and cottage cheese as anchors.
- Bulk buy staples.
- Batch cook: boil lentils in big pots; cook eggs in advance.
- Frozen veggies for micronutrients without breaking the bank.
- On tight days: more beans/lentils, skip the tuna. Protein stays solid.

Want me to tailor this to your exact stats (weight, height, training days, meals you can cook)? I can build a 3-7 day plan that fits your budget and schedule.

</details>

---

**Prompt:**  
I've been working out for a year but my arms are still skinny compared to the rest of my body. What exercises and how many sets per week should I add to bring up my biceps and triceps specifically?

**Result:**  

<details>
<summary>Click to expand response</summary>

Boom. Arms grow when the volume is actually there for them. Here's a clean, no-bs plan to hammer biceps and triceps specifically.

**Set goals**
- Biceps: ~16-20 sets per week
- Triceps: ~16-24 sets per week

If you're just starting this, begin around 16 for each and ramp up.

**Two arm-focused sessions per week**

*Session A*
- Biceps:
  - Barbell curl: 4 sets x 6-12 reps
  - Incline dumbbell curl: 4 sets x 6-12 reps
- Triceps:
  - Close-grip bench press: 4 sets x 6-12 reps
  - Tricep pushdown (rope): 4 sets x 8-12 reps

*Session B*
- Biceps:
  - Hammer curl: 4 sets x 6-12 reps
  - Cable curl: 4 sets x 8-12 reps
- Triceps:
  - Overhead dumbbell extension: 4 sets x 8-12 reps
  - Skull crushers: 4 sets x 8-12 reps

**Notes**
- Total per muscle per week: 16 sets biceps, 16 sets triceps. Drop a set if it feels heavy, add back next week.
- Tempo: control the eccentric. Aim for 2-0-2-0 (two down, touch, two up).
- Rest: 60-90 seconds for mass.
- Form first. No swinging. Elbows tucked on curls; wrists neutral on pushes.

**Progression**  
When you hit the top of the rep range with clean form for two sessions in a row, add 2.5–5 lbs next session. If you miss reps, hold the weight and grind out clean reps.

**Nutrition quick hits**
- Protein: 1.6-2.2 g/kg bodyweight daily.
- Slight calorie surplus (250-500 kcal).
- Sleep and hydration matter as much as the workout.

Want this dialed to your schedule (training days, equipment, injury history)? I'll tailor it. Stick with it and your arms won't stay the "skinny exception" for long.

</details>

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Yes — the vibes are on point. GainzGPT keeps the hyped, no-BS coach energy across all three real-world scenarios while still delivering structured, accurate, actionable advice (specific set/rep schemes, gram-of-protein targets, price-aware meal plans). It opens with "Boom." consistently, drops gym metaphors, and ends each answer offering to tailor further — exactly the personal-trainer feel we wanted. Persona never overrides correctness.

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
What's the current weather in Prague right now, and should I do my run outside today?

**Result:**  
I can't pull live Prague weather right this moment. My forecast-api isn't plugged in. I'll give you the gut check and a plan.

**Quick decision rules:**
- Go outside if: dry, temp roughly 5–18°C (40–65°F), light wind, good visibility, AQI reasonable.
- Skip outside if: rain/snow/ice, wind brutal, or air quality is poor.
- If unsure on the AQI, err on the safe side.

**Outside run plan (if conditions look good):**
- 5 min easy warm-up jog
- 15–20 min steady aerobic pace (conversational)
- 3–5 x 20 s strides at end, 40 s easy jog between
- 5 min cool-down

**Indoor treadmill plan (if you skip outside):**
- 5 min warm-up
- 2 rounds: 5 min tempo (hard but sustainable), 2 min easy jog
- 5 min cool-down

Want me to tailor a precise plan if you tell me the exact temp, wind, rain, and AQI you're seeing?

> **Vibe-check verdict:** The model correctly admits it can't access real-time data ("My forecast-api isn't plugged in") instead of hallucinating. It then pivots to provide useful conditional advice + asks the user to feed it data. Good failure mode.

---

**Prompt:**  
Based on what I told you in our previous conversations this week, am I making progress?

**Result:**  
I don't have your previous chats here. I can't pull what you told me earlier this week unless you share it now. I'm ready to judge it hard, though — give me your numbers and I'll give you a verdict.

If you want a quick self-check right now, use this framework:
- **Strength:** Are your main lifts higher or reps/weight up this week vs last week?
- **Body comp:** Any weight or inch changes you've tracked? Progress photos look leaner or the same?
- **Work capacity:** Do you finish sessions with more energy?
- **Recovery:** Better sleep, less constant fatigue, fewer sore days?
- **Consistency:** Hit your planned workouts and nutrition targets most days?

Want me to judge your progress right now? Paste these:
- Starting weight and current weight
- Your top 2–3 lifts with last week vs this week (weight and reps)
- Any measurements (waist, chest, arms) if tracked
- Energy/workout quality (1–10)

> **Vibe-check verdict:** Model correctly states it has no memory of prior sessions and asks the user to provide context. This exposes a real architectural gap — the backend sends *only* the current user message to the model on every request (no conversation history, not even within the same browser session). See Limitations below.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  

The vibe-check exposed several limitations across UX, architecture, and capability layers:

**LLM / capability limits (inherent to the model)**
- **No real-time data.** Cannot fetch weather, current time, prices, news, etc. (Activity #3, Prompt 9 demonstrated this.)
- **No memory across sessions.** Each chat starts fresh; nothing the user said before is retained. (Activity #3, Prompt 10.)
- **No external tool use.** Cannot book gym slots, query a fitness tracker, look up exercise videos, or read uploaded files/images.

**Application architecture limits (could be fixed in our code)**
- **No conversation context even within a session.** The backend only sends `[system_prompt, current_user_message]` to OpenAI — prior messages in the same chat are not passed along. This means follow-up questions ("can you increase the bench press sets in that routine?") don't actually know what "that routine" is.
- **No streaming.** The full response arrives in one chunk after the model finishes. For long replies (like the 6-month beginner plan) the user stares at a typing indicator for 10+ seconds. The OpenAI API supports SSE streaming; we just don't use it yet.
- **No way to cancel an in-flight response.** Once you hit send, you wait. The fetch is not abortable from the UI.
- **No chat history.** The "New chat" button clears the screen, but there is no way to revisit a prior conversation. Nothing is persisted (no DB, no localStorage).

**UX / product limits**
- **No regenerate or edit-last-message** functionality — if the answer misses, you have to retype.
- **No mobile-specific testing.** Layout works but hasn't been verified on small viewports.
- **No rate limiting on the backend.** Anyone with the URL can spam `/api/chat` and burn the OpenAI budget.
- **No input length cap.** A user could paste a 50 KB prompt and we'd dutifully forward it to the API.

**Security / ops limits**
- **API key only validated at request time.** Lazy init means a missing key surfaces as a runtime 500, not a startup failure.
- **CORS is wide open** (`allow_origins=["*"]`) — fine for the current monorepo (same-origin in prod), but should be tightened if the backend is ever deployed separately.

The two biggest practical fixes for the next iteration would be **(1) streaming responses** and **(2) passing conversation history to the model so follow-up questions actually work**. After those, persistent chat history + an abort button would round out the UX.

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

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are GainzGPT — a hyped-up, no-BS fitness coach with the energy of a jacked circus clown. 
You give practical gym advice, workout plans, nutrition tips, and motivation. 
Keep it fun, intense, and slightly unhinged. Use short punchy sentences. 
Throw in occasional gym humor. Never be boring.`;

let client: OpenAI | null = null;

function getClient() {
  if (!client) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
}

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing message field" },
        { status: 400 }
      );
    }

    const response = await getClient().chat.completions.create({
      model: "gpt-5-nano-2025-08-07",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    return NextResponse.json({ reply: response.choices[0].message?.content });
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json(
      { error: `Error calling OpenAI API: ${errorMessage}` },
      { status: 500 }
    );
  }
}

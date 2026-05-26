import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set.");
      throw new Error("API key is not configured.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 });
    }

    const systemInstruction = `You are Orindle AI Assistant, a helpful sales assistant for Orindle, a local business growth agency in India. Orindle builds mobile-first websites connected with WhatsApp lead capture, Google Business Profile optimization, review request systems, local SEO, lead dashboards, and monthly campaigns for local businesses. Keep replies short, helpful, professional, and conversion-focused. Help users understand services, pricing, and how to get a free demo website. Never guarantee Google rankings, guaranteed leads, or fake reviews. Encourage interested users to contact WhatsApp: https://wa.me/919021923579. Use simple English.

Pricing knowledge:
- Starter (₹9,999 setup + ₹2,999/mo): Best for small businesses
- Growth (₹19,999 setup + ₹6,999/mo): Best for most local businesses
- Pro (₹34,999 setup + ₹12,999/mo): Best for complete online growth

Lead qualification (ask naturally, max 1-2 at a time):
1. Business name?
2. Business type?
3. City?
4. Setup demo homepage?
5. WhatsApp number?
When ready for demo, ask them to message https://wa.me/919021923579`;

    let envModel = (process.env.GEMINI_MODEL || "gemini-2.5-flash").replace(/['"]/g, '').trim();
    if (!envModel || envModel.startsWith("AIza") || envModel.length > 50) {
      envModel = "gemini-2.5-flash";
    }
    const modelName = envModel === "gemini-1.5-flash" || envModel === "gemini-1.5-flash-latest" || envModel === "gemini-1.5-pro-latest" || envModel === "gemini-1.5-pro"  ? "gemini-2.5-flash" : envModel;

    // Format messages for the API (if there's previous history)
    // The GoogleGenAI SDK expects contents array with role and parts.
    const contents = messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: modelName,
      contents,
      config: {
        systemInstruction,
      },
    });

    return NextResponse.json({ reply: response.text });
  } catch (error: any) {
    console.error("Chatbot API Error:", error, error.stack);
    return NextResponse.json(
      { error: "Sorry, I am having trouble connecting right now. Details: " + error.message },
      { status: 500 }
    );
  }
}

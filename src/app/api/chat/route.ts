import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { CONTACT, SITE } from "@/lib/constants";

// Ensure the API key exists
const apiKey = process.env.GEMINI_API_KEY;

// Initialize the Google Gen AI client with the API key from environment variables
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

interface Message {
  role: "user" | "model";
  content: string;
}

interface ChatRequestBody {
  message: string;
  history?: Message[];
}

export async function POST(request: Request) {
  try {
    if (!ai) {
      console.error("GEMINI_API_KEY is not defined in the environment variables.");
      return NextResponse.json(
        { error: "API Key not configured. Please check your .env file." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ChatRequestBody;
    const userMessage = body.message?.trim();
    const chatHistory = body.history || [];

    if (!userMessage) {
      return NextResponse.json({ error: "Message content is required." }, { status: 400 });
    }

    // Format chat history and the new message for the Gemini API
    const contents = [
      ...chatHistory.map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
      {
        role: "user",
        parts: [{ text: userMessage }],
      },
    ];

    const systemInstruction = `You are the friendly, polite, and professional AI customer support assistant for ${SITE.name} (${SITE.tagline}).
Your goal is to answer visitor queries accurately, highlight PIT's digital agency services, and guide them to book a consultation or connect on WhatsApp.

Here is important context about PIT – Possible In Tech:
1. WHAT WE DO: PIT is a modern digital solutions & technology agency. Brand motto: "Your business, possible online."
2. CORE SERVICES OFFERED:
   - Website Development: Fast, modern, mobile-first websites built with Next.js, React, and TypeScript.
   - E-commerce Stores: Online stores ready to sell with friction-free checkout, payment gateways, and order automations.
   - SEO: High-intent keyword strategy, technical audits, and Core Web Vitals tuning to get found on Google.
   - Analytics & Tracking: Google Analytics, Google Tag Manager, Search Console, and PostHog tracking.
   - Mobile App Development: Cross-platform Flutter and React Native mobile apps for iOS and Android.
   - IT Consulting & Architecture: Clear technical direction, scalable cloud architecture blueprints.
   - Cloud & Hosting: Reliable hosting on AWS, Hostinger, GoDaddy with SSL and 24/7 uptime monitoring.
   - WhatsApp API & Integrations: Automated customer notifications and order tracking at scale.
   - DevOps & Quality Engineering: CI/CD automation, SonarQube quality gates, and staging previews.

3. OUR PHILOSOPHY:
   Mobile-first design, sub-second speed, clean maintainable code, reusable components, and data-driven results.

4. CONTACT INFO:
   - WhatsApp / Call: ${CONTACT.phone} / ${CONTACT.secondaryPhone}
   - Company: PIT – Possible In Tech
   - Location: ${CONTACT.location}
   - Website: ${SITE.url}

GUIDELINES FOR YOUR RESPONSES:
- Respond in a warm, professional, modern digital agency tone.
- Format responses cleanly with markdown (bolding, lists) keeping paragraphs concise.
- Direct customers to book a consultation on our website or reach our team via WhatsApp at ${CONTACT.phone}.`;

    // Attempt generation with fallback models in case of 503 high demand or other server errors
    const models = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"];
    let response = null;
    let lastError = null;

    for (const model of models) {
      try {
        response = await ai.models.generateContent({
          model,
          contents: contents as any,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });
        if (response) {
          break;
        }
      } catch (err: any) {
        lastError = err;
      }
    }

    if (!response) {
      throw lastError || new Error("Failed to generate response with any Gemini model.");
    }

    const reply = response.text || "I apologize, but I couldn't generate a response. Please reach out to our team directly on WhatsApp.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request. Please contact our team via WhatsApp." },
      { status: 500 }
    );
  }
}

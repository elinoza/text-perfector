"use server";

import azure from "../azure";
import { generateText } from "ai";

export async function makePerfect(prevState: any, e: FormData) {
  const userPrompt = e.get("uncheckedText") || "Why is sky Blue?";
  console.log(typeof userPrompt);
  const { text } = await generateText({
    model: azure("gpt-35-turbo-1106"),
    prompt: userPrompt.toString(),
    system:
      "You are here to correct grammar mistakes in user-provided sentences. Please correct the mistakes in the following sentence and only change the incorrect words.Incorrect Sentence: They is playing football.Correction:They are playing football.",
  });
  return {
    message: text,
  };
}

"use server";

import azure from "../utils/azure";
import { generateText } from "ai";

export type State = {
  message: string | null;
};

export async function makePerfect(prevState: State, e: FormData) {
  const userPrompt = e.get("uncheckedText");
  if (!userPrompt) {
    return { message: "Please provide a text for spell check." };
  }
  const { text } = await generateText({
    model: azure("gpt-35-turbo-1106"),
    prompt: userPrompt.toString(),
    system:
      "You are here to correct grammar mistakes in user-provided sentences. Please correct the mistakes in the following sentence and only change the incorrect words.Incorrect Sentence: They is playing football.Correction:They are playing football.If user gives a sentence which is already correct. Give the same prompt as output. Don't chat with the user.",
  });
  return {
    message: text,
  };
}

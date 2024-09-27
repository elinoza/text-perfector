"use client";

import { useFormState } from "react-dom";
import { makePerfect } from "./actions";

const initialState = {
  message: "",
};

export default function Home() {
  const [state, formAction] = useFormState(makePerfect, initialState);
  return (
    <main className="flex items-center justify-center">
      <form action={formAction}>
        <textarea
          id="uncheckedText"
          name="uncheckedText"
          placeholder="Type something for the ai check..."
          autoFocus
        />
        <button
          type="submit"
          className="bg-black px-2 py-3 text-white rounded-md border-neutral-300"
        >
          Check the text
        </button>
      </form>
      <div className="">
        <textarea
          className="w-full h-full"
          id="checkedText"
          name="checkedText"
          placeholder="Checked results will be showed here."
          value={state.message}
          disabled
        />
      </div>
    </main>
  );
}

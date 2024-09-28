"use client";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";

import { makePerfect } from "../actions";
import DiffViewer from "./Diff";
import { FaSpellCheck } from "react-icons/fa6";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center bg-emerald-500 w-auto px-5 py-2 text-white font-bold rounded-md border-neutral-300"
    >
      {pending ? "loading..." : "Check with ai"}
      <span className="text-sm ml-2">
        <FaSpellCheck />
      </span>
    </button>
  );
}

const initialState = {
  message: "",
};

const MainForm = () => {
  const [oldCode, setOldCode] = useState<string>("");
  const [state, formAction] = useFormState(makePerfect, initialState);
  return (
    <form
      action={formAction}
      className="flex flex-col items-center justify-center w-full "
    >
      <div className="flex flex-col md:flex-row m-5 h-[368px] w-full">
        {" "}
        <div className="flex-1 m-1 p-3 border h-full border-neutral-200 overflow-auto has-[:focus]:border-emerald-500 ">
          <label htmlFor="uncheckedText" className="text-sm text-neutral-400">
            Original Text
          </label>{" "}
          <textarea
            className="w-full h-full resize-none focus:outline-none font-mono text-md bg-transparent dark:text-white"
            id="uncheckedText"
            name="uncheckedText"
            placeholder="Type something for AI to check..."
            onChange={(e) => setOldCode(e.target.value)}
            autoFocus
          />
        </div>
        <div className="flex-1 m-1 h-full p-3 border border-neutral-200 overflow-auto dark:text-white">
          <span className="text-sm text-neutral-400">
            {" "}
            Corrected Text by AI
          </span>{" "}
          <DiffViewer one={oldCode} other={state?.message} />
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};
export default MainForm;

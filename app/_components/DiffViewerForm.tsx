"use client";

import DiffViewer from "./DiffViewer";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { useState } from "react";

const DiffViewerForm = ({
  handleClear,
  submittedOldCode,
  message,
}: {
  submittedOldCode: string;
  message: string;
  handleClear: () => void;
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="flex flex-col h-[568px] bg-transparent p-3 w-full border  border-neutral-200 overflow-auto">
      <button
        className="absolute -top-12 right-0 bg-red-500 px-3 py-2 text-white font-bold rounded-md border-neutral-300 overflow-visible"
        onClick={handleClear}
      >
        Clear
      </button>

      <div className="flex justify-around font-bold my-2">
        <div className="flex relative items-center justify-center gap-x-2">
          <h5 className="hidden md:block text-red-700">Removals </h5>
        </div>
        <div className="flex relative items-center justify-center gap-x-2">
          <h5 className="hidden md:block text-emerald-700">Additions</h5>
          <span className="text-sm absolute flex items-center -right-10 top-0 bottom-0 text-red-700 font-bold md:text-neutral-400">
            <CopyToClipboard text={message} onCopy={handleCopy}>
              <button>
                {isCopied ? (
                  <span className="text-lg text-emerald-500">
                    <LiaCheckDoubleSolid />
                  </span>
                ) : (
                  "Copy"
                )}
              </button>
            </CopyToClipboard>
          </span>
        </div>
      </div>
      <DiffViewer oldCode={submittedOldCode} newCode={message} />
    </div>
  );
};

export default DiffViewerForm;

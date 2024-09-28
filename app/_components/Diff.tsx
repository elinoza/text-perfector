import { diffChars } from "diff";
import React from "react";

const DiffViewer = ({ one, other }: { one: string; other: string }) => {
  // Get diff using Diff.diffChars
  const diff = diffChars(one, other);

  return (
    <div className="font-mono text-md">
      {diff.map((part, index) => {
        const style = part.added
          ? "bg-green-200 text-green-800"
          : part.removed
          ? "bg-red-200 text-red-800 hidden"
          : "bg-white text-black";

        return (
          <span key={index} className={style}>
            {part.value}
          </span>
        );
      })}
    </div>
  );
};

export default DiffViewer;

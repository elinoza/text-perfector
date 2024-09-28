"use client";
import ReactDiffViewer from "react-diff-viewer-continued";
import { useEffect, useState } from "react";

enum DiffMethod {
  CHARS = "diffChars",
  WORDS = "diffWords",
  WORDS_WITH_SPACE = "diffWordsWithSpace",
  LINES = "diffLines",
  TRIMMED_LINES = "diffTrimmedLines",
  SENTENCES = "diffSentences",
  CSS = "diffCss",
}

const DiffViewer = ({
  oldCode,
  newCode,
}: {
  oldCode: string;
  newCode: string;
}) => {
  const [isSplitView, setIsSplitView] = useState(true);

  const baseStyles = {
    diffContainer: {
      "place-self": "flex-start",
    },
    contentText: {
      "font-size": "0.8rem!important",
      "line-height": "1rem!important",
    },
  };

  const newStyles = isSplitView
    ? {
        ...baseStyles,
        gutter: { background: "transparent!important" },
      }
    : baseStyles;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        // Ekran boyutu sm (640px) veya daha küçükse splitView false olur
        setIsSplitView(false);
      } else {
        setIsSplitView(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReactDiffViewer
      oldValue={oldCode}
      newValue={newCode}
      splitView={isSplitView}
      compareMethod={DiffMethod.CSS}
      styles={newStyles}
      hideLineNumbers={false}
    />
  );
};

export default DiffViewer;

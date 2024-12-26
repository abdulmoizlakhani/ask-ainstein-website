interface HighlightProps {
  text: string;
  highlights?: string[];
}

interface ReturnHighlightPart {
  text: string;
  isHighlight: boolean;
}

const useTextHighlight = ({
  text,
  highlights = [],
}: HighlightProps): { parts: ReturnHighlightPart[] } => {
  if (!highlights.length || !text) {
    return { parts: [{ text, isHighlight: false }] };
  }

  // Escape special regex characters in the highlights
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const sortedHighlights = [...highlights]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp);

  const highlightRegex = new RegExp(`(${sortedHighlights.join("|")})`, "gi");

  const splitParts = text.split(highlightRegex);
  const result: ReturnHighlightPart[] = splitParts.map((part) => ({
    text: part,
    isHighlight: highlights.some(
      (highlight) => part.toLowerCase() === highlight.toLowerCase()
    ),
  }));

  return { parts: result };
};

export default useTextHighlight;

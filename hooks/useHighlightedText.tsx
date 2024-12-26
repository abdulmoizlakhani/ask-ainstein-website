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

  // Sort highlights by length in descending order to avoid partial matches
  const sortedHighlights = [...highlights].sort((a, b) => b.length - a.length);

  // Create a regular expression to match any of the highlights
  const highlightRegex = new RegExp(`(${sortedHighlights.join("|")})`, "gi");

  const splitParts = text.split(highlightRegex);
  const result: ReturnHighlightPart[] = splitParts.map((part) => ({
    text: part,
    isHighlight: sortedHighlights.some((highlight) =>
      new RegExp(`^${highlight}$`, "i").test(part)
    ),
  }));

  return { parts: result };
};

export default useTextHighlight;

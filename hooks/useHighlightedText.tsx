interface HighlightProps {
  text: string;
  highlight?: string;
}

interface ReturnHighlightPart {
  text: string;
  isHighlight: boolean;
}

const useTextHighlight = ({
  text,
  highlight,
}: HighlightProps): { parts: ReturnHighlightPart[] } => {
  if (!highlight || !text) {
    return { parts: [{ text, isHighlight: false }] };
  }

  const splitParts = text.split(highlight);
  const result: ReturnHighlightPart[] = [];

  splitParts.forEach((part, index) => {
    if (part) {
      result.push({ text: part, isHighlight: false });
    }
    if (index < splitParts.length - 1) {
      result.push({ text: highlight, isHighlight: true });
    }
  });

  return { parts: result };
};

export default useTextHighlight;

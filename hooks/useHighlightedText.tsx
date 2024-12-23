interface HighlightProps {
  text: string;
  highlight?: string;
}

interface HighlightPart {
  text: string;
  isHighlight: boolean;
}

export const useTextHighlight = ({
  text,
  highlight,
}: HighlightProps): { parts: HighlightPart[] } => {
  if (!highlight || !text) {
    return { parts: [{ text, isHighlight: false }] };
  }

  const splitParts = text.split(highlight);
  const result: HighlightPart[] = [];

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

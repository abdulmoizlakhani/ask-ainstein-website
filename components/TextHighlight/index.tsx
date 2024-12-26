import useTextHighlight from "@/hooks/useHighlightedText";

interface TextHighlightProps {
  text: string;
  highlightText?: string | string[];
  variant: "DEFUALT" | "primary" | "secondary" | "tertiary" | "danger" | "none";
  className?: string;
}

const classes = {
  DEFUALT: "text-secondary-dark",
  none: "",
  primary: "text-primary-300",
  secondary: "bg-yellow-light text-highlight",
  tertiary: "bg-blue-light text-highlight",
  danger: "text-red-800",
};

const TextHighlight = ({
  text,
  highlightText,
  variant = "DEFUALT",
  className,
}: TextHighlightProps) => {
  const highlights = Array.isArray(highlightText)
    ? highlightText
    : highlightText
      ? [highlightText]
      : [];

  const { parts } = useTextHighlight({ text, highlights });

  return (
    <>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span
            key={`text_highlight_${index}`}
            className={`${classes[variant]} ${className}`}
          >
            {part.text}
          </span>
        ) : (
          <span key={`text_highlight_${index}`}>{part.text}</span>
        )
      )}
    </>
  );
};

export default TextHighlight;

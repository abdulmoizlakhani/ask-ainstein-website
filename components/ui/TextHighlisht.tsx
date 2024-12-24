import { useTextHighlight } from "@/hooks/useHighlightedText";

interface TextHighlightProps {
  text: string;
  highlightText?: string;
  variant: "primary" | "secondary" | "DEFUALT" | "ask-ainstein";
  className?: string;
}
const classes = {
  primary: "bg-blue-light text-highlight",
  secondary: "bg-yellow-light text-highlight",
  DEFUALT: "text-secondary-dark",
  "ask-ainstein": "bg-yellow-800 text-highlight",
};
export const TextHighlight = ({
  text,
  highlightText,
  variant,
  className,
}: TextHighlightProps) => {
  const { parts }: { parts: { text: string; isHighlight: boolean }[] } =
    useTextHighlight({ text, highlight: highlightText });

  return (
    <>
      {parts.map((part, index) =>
        part.isHighlight ? (
          <span key={index} className={` ${classes[variant]} ${className}`}>
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </>
  );
};

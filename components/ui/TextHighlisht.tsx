import { useTextHighlight } from "@/hooks/useHighlightedText";

interface TextHighlightProps {
  text: string;
  highlightText?: string;
  variant: "primary" | "secondary" | "DEFUALT" | "ask-ainstein" | "red";
  className?: string;
}
const classes = {
  primary: "bg-blue-light text-highlight",
  secondary: "bg-yellow-light text-highlight",
  red: "text-red-800",
  DEFUALT: "text-secondary-dark",
  "ask-ainstein": "text-primary-300",
};
export const TextHighlight = ({
  text,
  highlightText,
  variant = "primary",
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

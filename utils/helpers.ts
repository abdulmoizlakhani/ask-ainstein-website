export const generateKey = (text: string | number): string => {
  if (typeof text === "number") {
    return `id:${text}`;
  }

  console.log("text", text);

  const trimmedText = text.trim();
  if (trimmedText === "") {
    return `id:${Date.now()}`;
  }

  const sanitizedText = trimmedText
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-");

  return `${sanitizedText}-${Date.now()}`;
};

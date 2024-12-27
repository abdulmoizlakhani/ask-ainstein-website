export const generateKey = (text: string | number): string => {
  if (typeof text === "number") {
    return `id:${text}`;
  }

  const trimmedText = text.trim();
  if (trimmedText === "") {
    throw new Error("Key cannot be an empty string");
  }

  const sanitizedText = trimmedText
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-");

  return `${sanitizedText}-${Date.now()}`;
};

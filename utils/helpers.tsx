export const truncat = (text: string, size: number) => {
  if (!text) return "No description available";
  const shortText = text?.split("");
  shortText?.splice(size);

  return shortText?.join("") + (text?.length > size ? "..." : "");
};

export enum fetchFunctionToUse {
  TRENDING,
  POPULAR,
  SEASON,
  SEARCH,
}

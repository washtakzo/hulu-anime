export const truncat = (text: string, size: number) => {
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

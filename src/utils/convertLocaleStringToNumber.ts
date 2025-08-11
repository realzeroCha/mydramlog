export const convertLocaleStringToNumber = (localeString: string) => {
  const cleanedString = localeString.replace(/,/g, "");
  return parseFloat(cleanedString);
};

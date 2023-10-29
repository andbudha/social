export const maxAboutMeLength = (maxLength: number) => (value: string) => {
  return value && value.length <= maxLength
    ? undefined
    : 'Paragrath must be 120 characters or less!';
};

export const aboutMeLength120 = maxAboutMeLength(120);

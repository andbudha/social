export const maxAboutMeLength = (maxLength: number) => (value: string) => {
  return value && value.length <= maxLength
    ? undefined
    : 'Do not exceed 120 characters!';
};

export const aboutMeLength120 = maxAboutMeLength(120);

export const maxPostLength = (maxLength: number) => (value: string) => {
  return value && value.length < maxLength
    ? undefined
    : 'Posts must be 100 characters or less!';
};

export const postLength100 = maxPostLength(100);

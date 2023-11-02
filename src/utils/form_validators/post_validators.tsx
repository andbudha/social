export const maxPostLength = (maxLength: number) => (value: string) => {
  return value && value.length < maxLength
    ? undefined
    : 'Only 50 characters or less!';
};

export const postLength50 = maxPostLength(50);

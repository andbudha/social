export const maxMessageLength = (maxLength: number) => (value: string) => {
  return value && value.length < maxLength
    ? undefined
    : 'Messages must be 150 characters or less!';
};

export const messageLength150 = maxMessageLength(150);

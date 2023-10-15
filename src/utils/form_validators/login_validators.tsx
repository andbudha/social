export const requiredFieldValue = (value: string) => {
  if (value) {
    return undefined;
  }
  return 'Field is required!';
};

export const maxLoginNameLength = (maxLength: number) => (value: string) => {
  return value && value.length < maxLength
    ? undefined
    : 'Messages must be 150 characters or less!';
};

export const loginLength150 = maxLoginNameLength(150);

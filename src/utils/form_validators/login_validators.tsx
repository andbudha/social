export const requiredFieldValue = (value: string) => {
  if (value) {
    return undefined;
  }
  return 'Field is required!';
};

export const maxLoginNameLength = (maxLength: number) => (value: string) => {
  return value && value.length < maxLength
    ? undefined
    : 'Login-name must be 15 characters or less!';
};

export const loginLength15 = maxLoginNameLength(15);

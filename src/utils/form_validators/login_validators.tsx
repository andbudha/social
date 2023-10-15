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

export const loginNameLength15 = maxLoginNameLength(15);

export const loginMinPasswordLength =
  (minLength: number) => (value: string) => {
    return value && value.length < minLength
      ? 'Password must be between 3 and 8 digits!'
      : undefined;
  };

export const loginMaxPasswordLength =
  (maxLength: number) => (value: string) => {
    return value && value.length > maxLength
      ? 'Password must be between 3 and 8 digits!'
      : undefined;
  };

export const minPasswordLength3 = loginMinPasswordLength(3);
export const maxPasswordLength8 = loginMaxPasswordLength(8);

export const requiredFieldValue = (value: string) => {
  if (value) {
    return undefined;
  }
  return 'Required';
};

export const isEmailValid = (value: string) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
};

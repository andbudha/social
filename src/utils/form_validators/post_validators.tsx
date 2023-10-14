export const requiredMessageValue = (value: string) => {
  if (value) {
    return undefined;
  }
  return 'Field is required!';
};

export const maxPostLength = (maxLength: number) => (value: string) => {
  return value && value.length < maxLength
    ? undefined
    : console.log('Must be 100 characters or less!');
};

export const postLength100 = maxPostLength(100);

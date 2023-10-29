export const maxProfileNameLength = (maxLength: number) => (value: string) => {
  return value && value.length <= maxLength
    ? undefined
    : 'Do not exceed 25 characters!';
};

export const nameLength25 = maxProfileNameLength(25);

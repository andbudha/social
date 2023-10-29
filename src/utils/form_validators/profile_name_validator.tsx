export const maxProfileNameLength = (maxLength: number) => (value: string) => {
  return value && value.length <= maxLength
    ? undefined
    : 'Name must be 25 characters or less!';
};

export const nameLength25 = maxProfileNameLength(25);

export const maxProfileContactLength =
  (maxLength: number) => (value: string) => {
    return value && value.length <= maxLength
      ? undefined
      : 'Title must be 25 characters or less!';
  };

export const contactLength25 = maxProfileContactLength(25);

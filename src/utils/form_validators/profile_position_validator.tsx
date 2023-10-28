export const maxProfilePositionLength =
  (maxLength: number) => (value: string) => {
    return value && value.length < maxLength
      ? undefined
      : 'Name must be 25 characters or less!';
  };

export const positionLength25 = maxProfilePositionLength(25);

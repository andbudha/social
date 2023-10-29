export const maxProfilePositionLength =
  (maxLength: number) => (value: string) => {
    return value && value.length <= maxLength
      ? undefined
      : 'Do not exceed 25 characters!';
  };

export const positionLength25 = maxProfilePositionLength(25);

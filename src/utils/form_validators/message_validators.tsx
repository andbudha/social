// export const requiredMessageValue = (value: string) => {
//   if (value) {
//     return undefined;
//   }
//   return 'Field is required!';
// };

export const maxMessageLength = (maxLength: number) => (value: string) => {
  return value && value.length < maxLength
    ? undefined
    : 'Posts must be 100 characters or less!';
};

export const postLength100 = maxMessageLength(100);

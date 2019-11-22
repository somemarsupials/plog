export const requestParametersToDate = ({ year, month, day }: Record<string, string>): Date => {
  return new Date(`${year}/${month}/${day}`);
};

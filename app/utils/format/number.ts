export const isInRange = (min: number, max: number, value: number) => {
  return value >= min && value <= max;
};

export const decimal = (val: number, digits?: number) => {
  const fixDigits = digits ?? 1;

  return (Math.round(val * 10 ** fixDigits) / 10 ** fixDigits).toFixed(
    fixDigits,
  );
};

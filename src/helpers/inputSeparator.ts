import inputFormatter from './inputCardFormatter';

const inputSeparator = (
  value: string,
  maxLength: number,
  separatorCalc: number,
) => {
  const formatterValue: string = inputFormatter(value);
  const cardNumber =
    formatterValue.length > maxLength
      ? formatterValue.slice(0, maxLength + 1)
      : formatterValue;

  return {
    1: cardNumber.slice(0, separatorCalc),
    2: cardNumber.slice(separatorCalc, 2 * separatorCalc),
    3: cardNumber.slice(2 * separatorCalc, 3 * separatorCalc),
    4: cardNumber.slice(3 * separatorCalc, 4 * separatorCalc),
  };
};

export default inputSeparator;

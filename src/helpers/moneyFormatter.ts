import * as R from 'ramda';

const moneyFormatter = (moneyValue: number) => {
  const trifle = moneyValue % 100;
  const hundreds = (moneyValue % 100000) - trifle;
  const thousand = (moneyValue % 100000000) - hundreds - trifle;
  const hundredsFormatted = hundreds / 100;
  const thousandFormatted = thousand / 100000;

  if (trifle && hundredsFormatted && thousandFormatted) {
    return `${thousandFormatted},${
      hundredsFormatted === 0 ? hundredsFormatted : '000'
    }.${trifle === 0 ? '00' : trifle}`;
  }

  if (trifle && !R.isNil(hundredsFormatted) && !R.isNil(thousandFormatted)) {
    return `${hundredsFormatted}.${trifle === 0 ? '00' : trifle}`;
  }

  if (trifle && !R.isNil(hundredsFormatted) && !R.isNil(thousandFormatted)) {
    return trifle.toString();
  }

  return '';
};

export default moneyFormatter;

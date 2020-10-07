const bankMoneyFormatter = (moneyValue: number) => {
  const grivnas = Math.abs(moneyValue) / 100;
  const trifle = moneyValue % 100;
  const numeral = grivnas.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return {
    totalCash: (moneyValue < 0 ? '-' : '') + numeral,
    trifle: trifle <= 9 ? `0${trifle}` : trifle,
  };
};

export default bankMoneyFormatter;

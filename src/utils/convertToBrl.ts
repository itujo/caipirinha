const convertToBrl = (value: any) => {
  const nf = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',

    maximumFractionDigits: 2,
  });

  const val = parseFloat(value);
  return nf.format(val);
};
export { convertToBrl };

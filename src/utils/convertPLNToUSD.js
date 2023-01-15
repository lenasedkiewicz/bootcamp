export const convertPLNToUSD = (PLN) => {

  if (typeof(PLN) === 'string' || PLN === undefined) {
    return NaN;
  } else if (typeof(PLN) !== 'number' && typeof(PLN) !== 'string') {
    return 'Expected number, received other type of input!';
  }

  const PLNtoUSD = PLN / 3.5;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}
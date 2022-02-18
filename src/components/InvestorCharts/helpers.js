export const getQuery = (type) => {
  switch (type) {
    case 'volume':

    // eslint-disable-next-line no-fallthrough
    default:
      return `https://api.covalenthq.com/v1/56/networks/pancakeswap_v2/ecosystem/?quote-currency=USD&format=JSON&key=${process.env.REACT_APP_API_KEY}`;
  }
}

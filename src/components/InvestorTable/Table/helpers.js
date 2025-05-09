/* eslint-disable no-fallthrough */
export const getQuery = (type, params) => {
  const {
    chainID,
    address,
    pageNumber,
    pageSize,
  } = params;

  switch (type) {
    case 'tokenBalance':
      return `https://api.covalenthq.com/v1/${chainID}/address/${address}/balances_v2/?key=${process.env.REACT_APP_API_KEY}`

    case 'historicPortfolio':
      return `https://api.covalenthq.com/v1/${chainID}/address/${address}/portfolio_v2/?&key=${process.env.REACT_APP_API_KEY}`

    case 'transactionAddress':
    
    default:
      return `https://api.covalenthq.com/v1/${chainID}/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&page-number=${pageNumber}&page-size=${pageSize}&key=${process.env.REACT_APP_API_KEY}`
  }
}

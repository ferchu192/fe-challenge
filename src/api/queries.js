export const TRANSACTION_QUERY = ({
  chainID,
  limit,
  offset,
  address,
}) => {
  const where = address ? `where: {Transaction: {From: {is: "${address}"}}}` : '';
  return `
    query GET_TRANSACTIONS {
      EVM {
        Transactions(
          limit: {count: ${limit || 2}, offset: ${offset || 0}}
          ${where}
        ) {
          ChainId(selectWhere: {eq: "${chainID || 1}"})
          count
          Transaction {
            From
            CostInUSD
            Cost
            Time
            Hash
            To
            Value
            ValueInUSD
          }
          TransactionStatus {
            EndError
            Success
            FaultError
          }
        }
      }
    }
`;}

export const TRANSFER_QUERY = ({
  chain,
  limit,
  offset,
  address,
}) => {
  const where = address
    ? `any: [
          {Transfer: {Sender: {is: "${address}"}}},
          {Transfer: {Receiver: {is: "${address}"}}}
    ],`
    : '';

  return `
    query GET_TRANSFERS {
      EVM {
        Transfers(
          limit: {count: ${limit}, offset: ${offset}}
          where: {
            ${where}
            Transfer: {
              Currency: {Native: true},
            }
          }
        ) {
          ChainId(selectWhere: {eq: "${chain}"})
          count
          Transfer {
            Amount
            AmountInUSD
            Type
            Sender
            Receiver
            Currency {
              Name
              Symbol
              SmartContract
            }
            Success
          }
          Transaction {
            Hash
            Cost
            CostInUSD
            Time
            Gas
          }
        }
      }
    }
`;
}
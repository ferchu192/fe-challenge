export const TRANSACTION_QUERY = ({chainID, limit}) => `
query GET_TRANSACTIONS {
  EVM {
    Transactions(limit: {count: ${limit || 2}}) {
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
`;
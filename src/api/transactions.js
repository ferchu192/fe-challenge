import api from "./axiosInstance";

import { TRANSACTION_QUERY } from "./queries";

export const getTransactions = async (params) => {
  const query = TRANSACTION_QUERY(params);
  const data = JSON.stringify({ query });

  try {
    const response = await api.post("", data); 

    const { Transactions } = response.data.data.EVM;
    const parsed = Transactions.map((transaction) => ({
      hash: transaction.Transaction.Hash,
      date: transaction.Transaction.Time,
      from: transaction.Transaction.From,
      to: transaction.Transaction.To,
      gas: transaction.Transaction.Gas,
      value: transaction.Transaction.Value,
      valueUSD: transaction.Transaction.ValueInUSD,
      cost: transaction.Transaction.Cost,
      costUSD: transaction.Transaction.CostInUSD,
      success: transaction.TransactionStatus.Success,
      priceUSD: transaction.Transaction.Value/transaction.Transaction.ValueInUSD,
      type: transaction.Transaction.Type,
    }));

    return parsed;
  } catch (error) {
    console.error("Error fetching transactions", error);
    throw error;
  }
};
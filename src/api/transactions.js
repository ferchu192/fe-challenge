import api from "./axiosInstance";

import { TRANSACTION_QUERY } from "./queries";
import USD from '../schemas/usd.js';

/*
Excelente pregunta. Hay diferencias importantes entre Transferencias (Transfers) y Transacciones (Transactions) en el contexto de blockchain:

Transacciones (Transactions)

Son la unidad fundamental de cuenta en una blockchain.
Representan cualquier operación que modifica el estado de la blockchain.
Cada transacción tiene un hash único, un remitente (from), posiblemente un destinatario (to), y datos de entrada.
Incluyen transacciones de transferencia de valor, llamadas a contratos inteligentes, despliegue de contratos, etc.
Siempre se registran directamente en la blockchain.
Transferencias (Transfers)

Son un subconjunto específico de actividad que implica el movimiento de valor (tokens o criptomonedas).
Pueden ocurrir como parte de una transacción directa o como resultado de la ejecución de un contrato inteligente.
Incluyen transferencias de ETH, tokens ERC-20, NFTs, etc.
Una sola transacción puede contener múltiples transferencias.
Las transferencias pueden ser "internas" cuando ocurren dentro de la ejecución de un contrato inteligente.
Ejemplo práctico:

Si llama a un contrato inteligente que distribuye tokens a 5 direcciones diferentes, esto se registrará como:

1 transacción (su llamada al contrato)
5 transferencias (los movimientos de tokens a cada destinatario)
En la API de Bitquery, Transfers se enfoca específicamente en los movimientos de valor, mientras que Transactions proporciona información sobre las operaciones completas en la blockchain.

¿Le gustaría ver también una consulta para las transacciones de esta dirección?
*/

export const getTransactions = async (params, chain) => {
  const query = TRANSACTION_QUERY(params);
  const data = JSON.stringify({ query });

  const Usd = new USD();

  console.log('query', query);
  console.log('data', data);

  try {
    const response = await api.post(data); 

    const { Transactions } = response.data.data.EVM;
    const parsed = Transactions.map((transaction) => ({
      hash: transaction.Transaction.Hash,
      date: transaction.Transaction.Time,
      from: transaction.Transaction.From,
      to: transaction.Transaction.To,
      gas: transaction.Transaction.Gas,
      value: {
        value: transaction.Transaction.Value,
        chain: chain.getInfo(),
      },
      valueUSD: {
        value: transaction.Transaction.ValueInUSD,
        chain: Usd.getInfo(),
      },
      priceUSD: {
        value: transaction.Transaction.Value/transaction.Transaction.ValueInUSD,
        chain: Usd.getInfo(),
      },
      cost: {
        value: transaction.Transaction.Cost,
        chain: chain.getInfo(),
      },
      costUSD: {
        value: transaction.Transaction.CostInUSD,
        chain: Usd.getInfo(),
      },
      status: {
        success: transaction.TransactionStatus.Success,
        error: transaction.TransactionStatus.EndError,
        faultError: transaction.TransactionStatus.FaultError,
      },
      type: transaction.Transaction.Type,
    }));

    return parsed;
  } catch (error) {
    console.error("Error fetching transactions", error);
    return [];
  }
};
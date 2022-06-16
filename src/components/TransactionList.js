import React, { useContext } from "react";

import { HistoryList, IndexTitle } from "../styles/Texts/AppTexts";

import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <IndexTitle>History</IndexTitle>
      <HistoryList>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </HistoryList>
    </>
  );
};

export default TransactionList;

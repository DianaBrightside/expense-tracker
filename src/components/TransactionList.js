import React, { useContext } from "react";

import { HistoryList, IndexTitle } from "../styles/Texts/AppTexts";

import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

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

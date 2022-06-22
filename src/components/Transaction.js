import React, { useEffect, useState, useContext } from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import { ButtonBase } from "@mui/material";
import {
  HistoryCash,
  HistoryItem,
  HistoryText,
  HistoryItemBg,
} from "../styles/Texts/AppTexts";
import { IconRed } from "../styles/Icons/AppIcons";

import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const [signClass, setSignClass] = useState("");
  const { deleteTransaction } = useContext(GlobalContext);

  useEffect(() => {
    transaction.amount > 0 ? setSignClass("plus") : setSignClass("minus");
  }, [transaction.amount]);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <HistoryItemBg className={signClass}>
      <HistoryItem>
        <HistoryText>{transaction.text} </HistoryText>
        <HistoryCash>
          {sign}${Math.abs(transaction.amount)}
        </HistoryCash>
      </HistoryItem>
      <ButtonBase
        disableRipple={true}
        onClick={() => deleteTransaction(transaction.id)}
        sx={{
          padding: 0,
          minWidth: 0,
          display: "inline-block",
          lineHeight: 0,
        }}
        variant="text"
      >
        <IconRed as={CancelIcon} />
      </ButtonBase>
    </HistoryItemBg>
  );
};

export default Transaction;

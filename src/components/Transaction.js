import React, { useEffect, useState } from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import {
  HistoryCash,
  HistoryItem,
  HistoryItemBg,
} from "../styles/Texts/AppTexts";
import { Button } from "@mui/material";
import { IconRed } from "../styles/Icons/AppIcons";

const Transaction = ({ transaction }) => {
  const [signClass, setSignClass] = useState("");

  useEffect(() => {
    transaction.amount > 0 ? setSignClass("plus") : setSignClass("minus");
  });

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <HistoryItemBg className={signClass}>
      <HistoryItem>
        {transaction.text}{" "}
        <HistoryCash>
          {sign}${Math.abs(transaction.amount)}
        </HistoryCash>
      </HistoryItem>
      <Button
        sx={{
          padding: 0,
          minWidth: 0,
          display: "inline-block",
          lineHeight: 0,
        }}
        variant="text"
      >
        <IconRed as={CancelIcon} />
      </Button>
    </HistoryItemBg>
  );
};

export default Transaction;

import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import {
  HistoryCash,
  HistoryItem,
  HistoryItemBg,
  HistoryList,
  IndexTitle,
} from "../styles/Texts/AppTexts";
import { Button } from "@mui/material";
import { IconRed } from "../styles/Icons/AppIcons";

const TransactionList = () => {
  return (
    <>
      <IndexTitle>History</IndexTitle>
      <HistoryList>
        <HistoryItemBg>
          <HistoryItem>
            Cash <HistoryCash>-400$</HistoryCash>{" "}
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
          </HistoryItem>
        </HistoryItemBg>
      </HistoryList>
    </>
  );
};

export default TransactionList;

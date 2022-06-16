import React, { useContext } from "react";
import { Box, Divider, Paper } from "@mui/material";
import {
  ExpenseBalance,
  IncomeBalance,
  IndexTitle,
} from "../styles/Texts/AppTexts";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Paper sx={{ width: "100%" }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <IndexTitle>Income</IndexTitle>
          <IncomeBalance>${income}</IncomeBalance>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <IndexTitle>Expense</IndexTitle>
          <ExpenseBalance>${expense}</ExpenseBalance>
        </div>
      </Box>
    </Paper>
  );
};

export default IncomeExpenses;

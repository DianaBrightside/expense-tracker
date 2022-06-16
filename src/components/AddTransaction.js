import { Box, Divider } from "@mui/material";
import React, { useState, useContext } from "react";
import { AddTransactionBtn } from "../styles/Buttons/AppButtons";
import { Form, InputTransaction, InputWrapper } from "../styles/Forms/AppForms";
import { IndexTitle } from "../styles/Texts/AppTexts";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <IndexTitle>Add new transaction</IndexTitle>
      <Divider width="100%" />
      <Form onSubmit={onSubmit}>
        <Box>
          <InputWrapper>
            <label htmlFor="text">Text</label>
            <InputTransaction
              variant="filled"
              type="text"
              id="text"
              placeholder="Enter text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="amount">Amount</label>
            <InputTransaction
              variant="filled"
              type="number"
              id="amount"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </InputWrapper>
          <AddTransactionBtn type="submit" variant="contained">
            Add transaction
          </AddTransactionBtn>
        </Box>
      </Form>
    </>
  );
};

export default AddTransaction;

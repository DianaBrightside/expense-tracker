import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import { AddTransactionBtn } from "../styles/Buttons/AppButtons";
import { Form, InputTransaction, InputWrapper } from "../styles/Forms/AppForms";
import { IndexTitle } from "../styles/Texts/AppTexts";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <IndexTitle>Add new transaction</IndexTitle>
      <Divider width="100%" />
      <Form>
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
          <AddTransactionBtn variant="contained">
            Add transaction
          </AddTransactionBtn>
        </Box>
      </Form>
    </>
  );
};

export default AddTransaction;

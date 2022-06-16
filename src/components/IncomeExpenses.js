import React from "react";
import { Box, Divider, Paper } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

import { AddIconGreen, IconRed } from "../styles/Icons/AppIcons";
import { IndexTitle } from "../styles/Texts/AppTexts";

const IncomeExpenses = () => {
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
          <IndexTitle>
            Income <AddIconGreen />
          </IndexTitle>
          <p>+0.00$</p>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <IndexTitle>
            Expense <IconRed as={RemoveIcon} />
          </IndexTitle>
          <p>-0.00$</p>
        </div>
      </Box>
    </Paper>
  );
};

export default IncomeExpenses;

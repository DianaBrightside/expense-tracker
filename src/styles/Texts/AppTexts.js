import { Paper } from "@mui/material";
import styled from "styled-components";

export const HeaderTitle = styled.h1`
  font-size: 1.7em;
  margin: 10px 0 0;
`;

export const IndexTitle = styled.h3`
  font-size: 1.17em;
  margin: 10px 0 5px;
  display: flex;
  align-items: center;
`;

export const IncomeBalance = styled.p`
  font-weight: bold;
  color: #00a84d;
`;
export const ExpenseBalance = styled.p`
  font-weight: bold;
  color: #fd1309;
`;

export const HistoryList = styled.ul`
  padding: 0;
  width: 100%;
`;

export const HistoryItemBg = styled(Paper)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
  ${(props) => {
    if (props.className === "plus") {
      return `
      border-right: 4px solid #00a84d;
      `;
    } else {
      return `
      border-right: 4px solid #fd1309;
      `;
    }
  }}
`;

export const HistoryItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
export const HistoryText = styled.p`
  width: 90%;
  @media (max-width: 899px) {
    width: 70%;
  }
  font-size: 1.1em;
  color: #3d3d3d;
  word-break: break-all;
`;
export const HistoryCash = styled.span`
  margin: 5px;
  text-align: right;
  font-weight: 600;
  color: #000;
  width: 10%;
  @media (max-width: 899px) {
    width: 15%;
  }
`;

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

export const HistoryList = styled.ul`
  padding: 0;
  width: 100%;
`;

export const HistoryItemBg = styled(Paper)`
  width: 100%;
  padding: 0 10px;
`;

export const HistoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 1.1em;
  color: #3d3d3d;
`;

export const HistoryCash = styled.span`
  margin: 10px;
  font-weight: 600;
  color: #000;
`;

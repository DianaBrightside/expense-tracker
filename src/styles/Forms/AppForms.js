import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Form = styled.form`
  width: 100%;
  margin-top: 10px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
`;

export const InputTransaction = styled(TextField)`
  width: 100%;
`;

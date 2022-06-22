import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

import theme from "./styles/theme";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            height: "100vh",
            width: { xs: "90%", md: "70%", lg: "50%" },
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Box>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;

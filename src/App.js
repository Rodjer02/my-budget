import React from "react";
import { AppProvider } from "./context/AppContext";
import { ChakraProvider } from "@chakra-ui/react";
import MyBudgetPlanner from "./component/MyBudgetPlanner/MyBudgetPlanner";
import Expenses from "./component/Expenses/Expenses";
import AddExpense from "./component/AddExpense/AddExpense";

function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <div className="container">
          <MyBudgetPlanner />
          <Expenses />
          <AddExpense />
        </div>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;

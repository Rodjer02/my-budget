import { createContext, useReducer } from "react";

const AppReducer = (state, action, value) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
        searchList: state.expenses
          .filter((expense) => expense.id !== action.payload)
          .filter(
            (expense) =>
              expense.name.toLowerCase().indexOf(action.value.toLowerCase()) !=
                -1 ||
              expense.cost
                .toString()
                .toLowerCase()
                .indexOf(action.value.toLowerCase()) != -1
          ),
      };
    case "UPDATE_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "SEARCH_ITEM":
      return {
        ...state,
        searchList: state.expenses.filter(
          (expense) =>
            expense.name.toLowerCase().indexOf(action.payload.toLowerCase()) !=
              -1 ||
            expense.cost
              .toString()
              .toLowerCase()
              .indexOf(action.payload.toLowerCase()) != -1
        ),
      };
    default:
      return state;
  }
};
const initialState = {
  budget: 200000,
  expenses: [
    { id: 12, name: "shopping", cost: 400 },
    { id: 13, name: "holiday", cost: 4000 },
    { id: 14, name: "car service", cost: 4500 },
  ],
  searchList: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        searchList: state.searchList,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

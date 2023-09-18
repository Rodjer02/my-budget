import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const Budget = () => {
  const { dispatch, budget } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(true);
  const [budgetValue, setBudgetValue] = useState("");

  const editBudget = (event) => {
    event.preventDefault();
    setIsEditing(false);
    setBudgetValue(budget);
  };
  const updateBudget = () => {
    console.log(budgetValue);
    dispatch({
      type: "UPDATE_BUDGET",
      payload: Number(budgetValue),
    });
    setIsEditing(true);
  };

  return (
    <div className="alert alert-secondary">
      {isEditing ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Budget: {budget}tg</span>
          <Button colorScheme="blue" size="sm" onClick={editBudget}>
            Edit
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="number"
            value={budgetValue}
            onChange={(event) => setBudgetValue(event.target.value)}
          />
          {/* <NumberInput
            size="xs"
            value={budgetValue}
            onChange={(event) => setBudgetValue(event.target.value)}
          >
            <NumberInputField style={{ background: "#fff" }} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput> */}
          <Button colorScheme="blue" size="sm" onClick={updateBudget}>
            Update
          </Button>
        </div>
      )}
    </div>
  );
};

export default Budget;

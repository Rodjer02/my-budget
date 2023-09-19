import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";

export default function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div style={{ display: "flex" }}>
        <span
          className="badge badge-primary badge-pill mr-3"
          style={{
            background: "blue",
            borderRadius: "20px",
            padding: "5px 10px",
          }}
        >
          {props.cost} KZT
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
}

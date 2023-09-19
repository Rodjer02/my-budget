import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export default function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: new Date().getMilliseconds(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row" style={{ alignItems: "flex-end", gap: "20px" }}>
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <input type="submit" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}

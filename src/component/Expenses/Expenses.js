import ExpenseList from "./ExpenseList";
import { IconButton, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcSearch } from "react-icons/fc";
import ExpenseItem from "./ExpenseItem";

export default function Expenses() {
  const { dispatch, searchList } = useContext(AppContext);
  const [searchElem, setSearchElem] = useState("");
  const searchItem = (value) => {
    setSearchElem(value);
    dispatch({
      type: "SEARCH_ITEM",
      payload: value,
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Input
          placeholder="Basic usage"
          value={searchElem}
          onChange={(event) => searchItem(event.target.value)}
        />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<FcSearch />}
        />
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          {searchList == "" ? (
            <ExpenseList />
          ) : (
            <ul className="list-group">
              {searchList.map((expense) => (
                <ExpenseItem
                  value={searchElem}
                  key={expense.id}
                  id={expense.id}
                  name={expense.name}
                  cost={expense.cost}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

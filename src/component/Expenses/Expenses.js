import ExpenseList from "./ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Expenses() {
  return (
    <>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
    </>
  );
}

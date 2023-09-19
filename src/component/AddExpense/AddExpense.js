import "bootstrap/dist/css/bootstrap.min.css";
import AddExpenseForm from "./AddExpenseForm";
export default function AddExpense() {
  return (
    <>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </>
  );
}

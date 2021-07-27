import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expanseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expanseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

import "./ExpenseItem.css";

function ExpenseItem({ date, title, amount }) {


  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2 className="expense-item__title">{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;

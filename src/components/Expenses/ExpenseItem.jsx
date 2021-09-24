import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.scss";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2 className="expense-item__title">{title}</h2>
          <div className="expense-item__right">
            <div className="expense-item__price">${amount}</div>
            <button className="expense-item__button">Remove</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

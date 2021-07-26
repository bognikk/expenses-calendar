import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import "./Expenses.css";

function Expenses({ items }) {
  return (
    <>
      <Card className="expenses">
        {items.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </>
  );
}

export default Expenses;

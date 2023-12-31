import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../index.css';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <p className="no-expense">No Expenses found for {props.data}</p>;
    }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList
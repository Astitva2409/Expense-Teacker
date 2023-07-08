import React, { useState } from "react";
import "../index.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2019");

  const sendDataHandler = (data) => {
    setYear(data);
  };

  const filteredExpense = props.items.filter((expense) => {
    return (expense.date.getFullYear().toString() === year);
  });

  return (
    <div className="expenses">
      <ExpensesFilter selected={year} onSendData={sendDataHandler} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} data={year} />
    </div>
  );
};

export default Expenses;
import React, { useState } from "react";
import "../index.css";

const ExpenseForm = (props) => {
  //using multiple instances of states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 2nd way of using state (single instance of state)
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    //method  - 1
    setEnteredTitle(event.target.value);

    //method - 2 (using single sate)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    //method - 3 (using single sate)
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    //method - 1
    setEnteredAmount(event.target.value);

    //method - 2 (using single sate)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    //method - 3 (using single sate)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    //method - 1
    setEnteredDate(event.target.value);

    //method - 2 (using single sate)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    //method - 3 (using single sate)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveExpenseData(expenseData);
  };

  const cancelButtonHandler = () => {
    props.onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount (in ₹)</label>
          <input
            type="number"
            id="Amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="title"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelButtonHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

import React from "react";

import "./ExpenseTrackerPage.styles.css";

import { ExpenseList } from "../../components/expense/ExpenseList/ExpenseList.component";
import { ExpenseForm } from "../../components/expense/new-expense/ExpenseForm/ExpenseForm.component";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const ExpenseTrackerPage = () => {
  return (
    <div className="expensetracker__page" id="expensetracker_page">
      <p>ExpenseTrackerPage</p>
      <ExpenseForm></ExpenseForm>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default ExpenseTrackerPage;

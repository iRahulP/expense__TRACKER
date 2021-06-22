import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          onChangeFilter={filterChangedHandler} 
          selected={filteredYear} 
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
    
  );
}

export default Expenses;

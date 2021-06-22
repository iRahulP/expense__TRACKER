import ExpenseItem from "../Expenses/ExpenseItem";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";

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
        {filteredExpenses.length === 0 ?
         <p>NO Expenses Found!</p> 
          : 
         filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />)
          )
        }
      </Card>
    </div>
    
  );
}

export default Expenses;

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

  return (
    <div>
      <Card className="expenses">
       <ExpenseFilter onChangeFilter={filterChangedHandler} selected={filteredYear} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
      </Card>
    </div>
    
  );
}

export default Expenses;

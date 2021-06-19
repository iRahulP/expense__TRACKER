import ExpenseItem from "./ExpenseItem";
import React from "react";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        etitle={props.expenses[0].title}
        eamount={props.expenses[0].amount}
        edate={props.expenses[0].date}
      />
      <ExpenseItem
        etitle={props.expenses[1].title}
        eamount={props.expenses[1].amount}
        edate={props.expenses[1].date}
      />
      <ExpenseItem
        etitle={props.expenses[2].title}
        eamount={props.expenses[2].amount}
        edate={props.expenses[2].date}
      />
    </Card>
  );
}

export default Expenses;

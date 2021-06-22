import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";


const expenses_DATA = [
  {
    id: "e1",
    title: "Vehicle Check",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(expenses_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

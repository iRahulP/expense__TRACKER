import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
      date: new Date(2021, 2, 28),
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        etitle={expenses[0].title}
        eamount={expenses[0].amount}
        edate={expenses[0].date}
      />
      <ExpenseItem 
        etitle={expenses[1].title}
        eamount={expenses[1].amount}
        edate={expenses[1].date}
      />
      <ExpenseItem
        etitle={expenses[2].title}
        eamount={expenses[2].amount}
        edate={expenses[2].date}
     />
    </div>
  );
}

export default App;

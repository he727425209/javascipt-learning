import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    title: "Car Insurence",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: "1",
  },
  {
    title: "Car Insurence",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: "2",
  },
  {
    title: "Car Insurence",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: "3",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default App;

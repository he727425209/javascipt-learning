import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {title: "Car Insurence", amount: 294.67, date: new Date(2021, 2, 28)},
    {title: "Car Insurence", amount: 294.67, date: new Date(2021, 2, 28)},
    {title: "Car Insurence", amount: 294.67, date: new Date(2021, 2, 28)}
  ]
  return (
    <div>
      <NewExpense />
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
    </div>
  );
}

export default App;

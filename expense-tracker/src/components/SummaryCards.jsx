function SummaryCards({ expenses }) {
  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const totalTransactions = expenses.length;

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((e) => e.amount))
      : 0;

  const averageExpense =
    expenses.length > 0
      ? Math.round(totalExpense / expenses.length)
      : 0;

  return (
    <div className="cards">
      <div className="card purple">
        <h4>Total Expense</h4>
        <p>₹{totalExpense}</p>
      </div>

      <div className="card green">
        <h4>Total Transactions</h4>
        <p>{totalTransactions}</p>
      </div>

      <div className="card blue">
        <h4>Highest Expense</h4>
        <p>₹{highestExpense}</p>
      </div>

      <div className="card orange">
        <h4>Average Expense</h4>
        <p>₹{averageExpense}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
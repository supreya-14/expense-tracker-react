function BudgetAlert({ expenses, budget }) {
  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="budget-card">
      <h3>Monthly Budget</h3>

      <p>Budget: ₹{budget}</p>

      <p>Spent: ₹{totalExpense}</p>

      {totalExpense > budget ? (
        <h4 className="danger">
          ⚠ Budget Limit Exceeded!
        </h4>
      ) : (
        <h4 className="success">
          ✅ Budget Under Control
        </h4>
      )}
    </div>
  );
}

export default BudgetAlert;
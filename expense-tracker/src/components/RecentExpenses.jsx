function RecentExpenses({ expenses }) {
  const recentExpenses = [...expenses]
    .reverse()
    .slice(0, 5);

  return (
    <div className="recent-card">
      <div className="recent-header">
        <h3>Recent Expenses</h3>
        <span>View All</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {recentExpenses.length > 0 ? (
            recentExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>₹{expense.amount}</td>
                <td>{expense.date || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                No Expenses Added Yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentExpenses;
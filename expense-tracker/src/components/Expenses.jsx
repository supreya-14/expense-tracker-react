import { useState } from "react";

function Expenses({
  expenses,
  setExpenses,
  setEditIndex,
  setCurrentPage,
}) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const deleteExpense = (indexToDelete) => {
    const updatedExpenses = expenses.filter(
      (_, index) => index !== indexToDelete
    );

    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const categoryMatch =
      filter === "All" ||
      expense.category === filter;

    const searchMatch = expense.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="recent-card">
      <div className="recent-header">
        <h2>All Expenses</h2>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Others</option>
        </select>
      </div>

      <input
        type="text"
        className="search-box"
        placeholder="🔍 Search Expense..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>

                <td>{expense.category}</td>

                <td>₹{expense.amount}</td>

                <td>{expense.date || "N/A"}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      const originalIndex =
                        expenses.findIndex(
                          (item) => item === expense
                        );

                      setEditIndex(originalIndex);
                      setCurrentPage("addexpense");
                    }}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => {
                      const originalIndex =
                        expenses.findIndex(
                          (item) => item === expense
                        );

                      deleteExpense(originalIndex);
                    }}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Expenses Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;
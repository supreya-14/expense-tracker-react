import { useState, useEffect } from "react";

function AddExpense({
  expenses,
  setExpenses,
  editIndex,
  setEditIndex,
}) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const expense = expenses[editIndex];

      if (expense) {
        setName(expense.name);
        setAmount(expense.amount);
        setCategory(expense.category);
        setDate(expense.date || "");
      }
    }
  }, [editIndex, expenses]);

  const handleSubmit = () => {
    if (!name || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const expenseData = {
      name,
      amount: Number(amount),
      category,
      date,
    };

    if (editIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editIndex] = expenseData;

      setExpenses(updatedExpenses);
      setEditIndex(null);

      alert("Expense Updated Successfully!");
    } else {
      setExpenses([...expenses, expenseData]);

      alert("Expense Added Successfully!");
    }

    setName("");
    setAmount("");
    setCategory("Food");
    setDate("");
  };

  return (
    <div className="add-expense-card">
      <h2>
        {editIndex !== null
          ? "Edit Expense"
          : "Add New Expense"}
      </h2>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Others</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editIndex !== null
          ? "Update Expense"
          : "Add Expense"}
      </button>
    </div>
  );
}

export default AddExpense;
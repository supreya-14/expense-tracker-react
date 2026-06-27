import { useState, useEffect } from "react";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import ExpenseChart from "./components/ExpenseChart";
import RecentExpenses from "./components/RecentExpenses";
import AddExpense from "./components/AddExpense";
import Profile from "./components/Profile";
import Expenses from "./components/Expenses";
import Reports from "./components/Reports";
import BudgetAlert from "./components/BudgetAlert";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const [darkMode, setDarkMode] = useState(false);

  const [budget, setBudget] = useState(5000);

  const [editIndex, setEditIndex] = useState(null);

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [
          {
            name: "Lunch",
            category: "Food",
            amount: 450,
            date: "2026-06-13",
          },
          {
            name: "Metro Card",
            category: "Transport",
            amount: 250,
            date: "2026-06-12",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  if (!isLoggedIn) {
    return showSignup ? (
      <Signup
        setShowSignup={setShowSignup}
        setIsLoggedIn={setIsLoggedIn}
      />
    ) : (
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setShowSignup={setShowSignup}
      />
    );
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <Sidebar
        setIsLoggedIn={setIsLoggedIn}
        setCurrentPage={setCurrentPage}
      />

      <div className="dashboard">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {currentPage === "dashboard" && (
          <>
            <h1>Dashboard</h1>

            <SummaryCards expenses={expenses} />

            <BudgetAlert
              expenses={expenses}
              budget={budget}
            />

            <div className="dashboard-grid">
              <ExpenseChart expenses={expenses} />

              <RecentExpenses expenses={expenses} />
            </div>
          </>
        )}

        {currentPage === "expenses" && (
          <>
            <h1>Expenses</h1>

            <Expenses
              expenses={expenses}
              setExpenses={setExpenses}
              setEditIndex={setEditIndex}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}

        {currentPage === "addexpense" && (
          <>
            <h1>
              {editIndex !== null
                ? "Edit Expense"
                : "Add Expense"}
            </h1>

            <AddExpense
              expenses={expenses}
              setExpenses={setExpenses}
              editIndex={editIndex}
              setEditIndex={setEditIndex}
            />
          </>
        )}

        {currentPage === "reports" && (
          <>
            <h1>Reports</h1>

            <Reports expenses={expenses} />
          </>
        )}

        {currentPage === "profile" && (
          <>
            <h1>Profile</h1>

            <Profile />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
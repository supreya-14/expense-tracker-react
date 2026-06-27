import {
  FaHome,
  FaWallet,
  FaPlusCircle,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar({ setIsLoggedIn, setCurrentPage }) {
  return (
    <div className="sidebar">
      <h2>Expense Tracker</h2>

      <ul>
        <li onClick={() => setCurrentPage("dashboard")}>
          <FaHome />
          Dashboard
        </li>

        <li onClick={() => setCurrentPage("expenses")}>
          <FaWallet />
          Expenses
        </li>

        <li onClick={() => setCurrentPage("addexpense")}>
          <FaPlusCircle />
          Add Expense
        </li>

        <li onClick={() => setCurrentPage("reports")}>
          <FaChartBar />
          Reports
        </li>

        <li onClick={() => setCurrentPage("profile")}>
          <FaUser />
          Profile
        </li>

        <li
          className="logout-btn"
          onClick={() => setIsLoggedIn(false)}
        >
          <FaSignOutAlt />
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Reports({ expenses }) {
  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const totalTransactions = expenses.length;

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Expense Tracker Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`Total Expense: ₹${totalExpense}`, 14, 35);
    doc.text(
      `Total Transactions: ${totalTransactions}`,
      14,
      45
    );

    autoTable(doc, {
      startY: 55,
      head: [["Expense", "Category", "Amount", "Date"]],
      body: expenses.map((expense) => [
        expense.name,
        expense.category,
        `₹${expense.amount}`,
        expense.date,
      ]),
    });

    doc.save("Expense_Report.pdf");
  };

  return (
    <div className="recent-card">
      <h2>Expense Report</h2>

      <div className="report-box">
        <h3>Total Expense</h3>
        <p>₹{totalExpense}</p>
      </div>

      <div className="report-box">
        <h3>Total Transactions</h3>
        <p>{totalTransactions}</p>
      </div>

      <button
        className="download-btn"
        onClick={downloadPDF}
      >
        📄 Download PDF Report
      </button>
    </div>
  );
}

export default Reports;
import {
  FiHome,
  FiDownload,
} from "react-icons/fi";

import styles from "./Sidebar.module.css";

function Sidebar({ expenses }) {
  const exportCSV = () => {
    if (!expenses.length) {
      alert("No expenses to export");
      return;
    }

    const headers = [
      "Date",
      "Category",
      "Note",
      "Amount",
    ];

    const rows = expenses.map(
      (expense) => [
        expense.date,
        expense.category,
        expense.note,
        expense.amount,
      ]
    );

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.join(",")
      ),
    ].join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download = "expenses.csv";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <aside className={styles.sidebar}>
      <h2>Expense Tracker</h2>

      <nav>
        <a
          href="#"
          className={styles.active}
        >
          <FiHome />
          Dashboard
        </a>

        <button
          className={styles.exportBtn}
          onClick={exportCSV}
        >
          <FiDownload />
          Export CSV
        </button>
      </nav>

      <div className={styles.bottomSection}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>
            RG
          </div>

          <div className={styles.userInfo}>
            <h4>Robin</h4>
            <p>
              Personal Account
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
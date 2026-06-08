import {
  FiTrendingUp,
  FiFileText,
  FiArrowUp,
  FiBarChart2,
} from "react-icons/fi";

import styles from "./SummaryCards.module.css";

function SummaryCards({ expenses }) {
  const totalSpent = expenses.reduce(
    (sum, expense) =>
      sum + Number(expense.amount),
    0
  );

  const totalExpenses = expenses.length;

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map((expense) =>
            Number(expense.amount)
          )
        )
      : 0;

  const dailyAverage =
    totalExpenses > 0
      ? totalSpent / totalExpenses
      : 0;

  const cards = [
    {
      title: "Total Spent This Month",
      value: `₹${totalSpent.toLocaleString(
        "en-IN"
      )}`,
      icon: <FiTrendingUp />,
    },
    {
      title: "Total Expenses",
      value: totalExpenses,
      icon: <FiFileText />,
    },
    {
      title: "Highest Single Expense",
      value: `₹${highestExpense.toLocaleString(
        "en-IN"
      )}`,
      icon: <FiArrowUp />,
    },
    {
      title: "Daily Average",
      value: `₹${dailyAverage.toFixed(2)}`,
      icon: <FiBarChart2 />,
    },
  ];

  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={styles.card}
        >
          <div>
            <h4>{card.title}</h4>

            <h2>{card.value}</h2>
          </div>

          <div className={styles.icon}>
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
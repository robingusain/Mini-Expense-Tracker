import styles from "./BudgetPanel.module.css";

const budgets = {
  Food: 8000,
  Transport: 3000,
  Bills: 5000,
  Entertainment: 3000,
  Other: 2000,
};

function BudgetPanel({ expenses }) {
  const spentByCategory = {};

  expenses.forEach((expense) => {
    const category = expense.category;

    spentByCategory[category] =
      (spentByCategory[category] || 0) +
      Number(expense.amount);
  });

  return (
    <div className={styles.panel}>
      <h3>Budgets (This Month)</h3>

      {Object.entries(budgets).map(
        ([category, budget]) => {
          const spent =
            spentByCategory[category] || 0;

          const percentage = Math.min(
            (spent / budget) * 100,
            100
          );

          const exceeded = spent > budget;

          return (
            <div
              key={category}
              className={styles.budgetItem}
            >
              <div className={styles.header}>
                <span>{category}</span>

                <span>
                  ₹{spent.toLocaleString()} /
                  ₹{budget.toLocaleString()}
                </span>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={`${styles.progress} ${
                    exceeded
                      ? styles.danger
                      : ""
                  }`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              <div className={styles.footer}>
                {exceeded ? (
                  <span
                    className={styles.warning}
                  >
                    Budget Exceeded
                  </span>
                ) : (
                  <span>
                    {percentage.toFixed(0)}%
                  </span>
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default BudgetPanel;
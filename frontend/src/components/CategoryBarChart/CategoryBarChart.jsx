import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import styles from "./CategoryBarChart.module.css";

function CategoryBarChart({ expenses }) {
  const grouped = {};

  expenses.forEach((expense) => {
    const category = expense.category;

    grouped[category] =
      (grouped[category] || 0) +
      Number(expense.amount);
  });

  const data = Object.keys(grouped).map((key) => ({
    category: key,
    amount: grouped[key],
  }));

  return (
    <div className={styles.chartContainer}>
      <h3>Expenses by Category</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="category" />

          <YAxis />

          <Tooltip
            formatter={(value) =>
              `₹${Number(
                value
              ).toLocaleString()}`
            }
          />

          <Bar
            dataKey="amount"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryBarChart;
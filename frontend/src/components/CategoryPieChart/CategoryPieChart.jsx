import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

import styles from "./CategoryPieChart.module.css";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#EF4444",
];

function CategoryPieChart({ expenses }) {
  const grouped = {};

  expenses.forEach((expense) => {
    grouped[expense.category] =
      (grouped[expense.category] || 0) +
      Number(expense.amount);
  });

  const data = Object.keys(grouped).map(
    (category) => ({
      name: category,
      value: grouped[category],
    })
  );

  return (
    <div className={styles.chartContainer}>
      <h3>Expense Distribution</h3>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >
              {data.map(
                (_, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        {data.map((item, index) => (
          <div
            key={item.name}
            className={styles.legendItem}
          >
            <span
              className={styles.colorDot}
              style={{
                background:
                  COLORS[
                    index %
                      COLORS.length
                  ],
              }}
            />

            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPieChart;
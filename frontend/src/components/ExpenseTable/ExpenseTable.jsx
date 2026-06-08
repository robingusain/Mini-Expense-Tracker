import { FiEdit, FiTrash2 } from "react-icons/fi";

import styles from "./ExpenseTable.module.css";

function ExpenseTable({
  expenses,
  onDelete,
  onEdit,
}) {
  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Note</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>

              <td>
                <span
                  className={
                    styles[
                      expense.category.toLowerCase()
                    ]
                  }
                >
                  {expense.category}
                </span>
              </td>

              <td>{expense.note}</td>

              <td>
                ₹
                {Number(
                  expense.amount
                ).toLocaleString()}
              </td>

              <td>
                <div
                  className={styles.actions}
                >
                  <button
                    className={
                      styles.editBtn
                    }
                    onClick={() =>
                      onEdit(expense)
                    }
                  >
                    <FiEdit />
                  </button>

                  <button
                    className={
                      styles.deleteBtn
                    }
                    onClick={() =>
                      onDelete(expense.id)
                    }
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
import {
  useState,
  useEffect,
} from "react";

import styles from "./ExpenseForm.module.css";

function ExpenseForm({
  addExpense,
  updateExpense,
  editingExpense,
}) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  useEffect(() => {
    if (editingExpense) {
      setForm(editingExpense);
    }
  }, [editingExpense]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !form.amount ||
      form.amount <= 0 ||
      !form.category
    ) {
      return;
    }

    if (form.id) {
      updateExpense(form);
    } else {
      addExpense(form);
    }

    setForm({
      amount: "",
      category: "",
      date: "",
      note: "",
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
    >
      <div className={styles.formHeader}>
        <h3>
          {form.id
            ? "Edit Expense"
            : "Add New Expense"}
        </h3>

        <p>
          Record your spending and
          track where your money
          goes.
        </p>
      </div>

      <div>
        <label>Amount (₹)</label>

        <input
          type="number"
          placeholder="Enter amount"
          value={form.amount}
          onChange={(e) =>
            setForm({
              ...form,
              amount:
                e.target.value,
            })
          }
        />
      </div>

      <div>
        <label>Category</label>

        <select
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category:
                e.target.value,
            })
          }
        >
          <option value="">
            Select Category
          </option>

          <option>Food</option>
          <option>Transport</option>
          <option>Bills</option>
          <option>
            Entertainment
          </option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label>Date</label>

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({
              ...form,
              date:
                e.target.value,
            })
          }
        />
      </div>

      <div>
        <label>Note</label>

        <textarea
          placeholder="Add a note..."
          value={form.note}
          onChange={(e) =>
            setForm({
              ...form,
              note:
                e.target.value,
            })
          }
        />
      </div>

      <button type="submit">
        {form.id
          ? "Update Expense"
          : "Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;
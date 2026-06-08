import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import SummaryCards from "../components/SummaryCards/SummaryCards";
import Filters from "../components/Filters/Filters";
import ExpenseTable from "../components/ExpenseTable/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import CategoryPieChart from "../components/CategoryPieChart/CategoryPieChart";
import CategoryBarChart from "../components/CategoryBarChart/CategoryBarChart";
import BudgetPanel from "../components/BudgetPanel/BudgetPanel";

import styles from "./Dashboard.module.css";

function Dashboard() {
  const [expenses, setExpenses] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("expenses")) || [];
    } catch {
      return [];
    }
  });

  const [editingExpense, setEditingExpense] = useState(null);

  const [categoryFilter, setCategoryFilter] = useState("");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense,
    };

    setExpenses((prev) => [newExpense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const updateExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense,
      ),
    );

    setEditingExpense(null);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const categoryMatch =
      !categoryFilter || expense.category === categoryFilter;

    const expenseDate = new Date(expense.date);

    const startMatch = !startDate || expenseDate >= new Date(startDate);

    const endMatch = !endDate || expenseDate <= new Date(endDate);

    return categoryMatch && startMatch && endMatch;
  });

  return (
    <div className={styles.layout}>
      <Sidebar expenses={filteredExpenses} />

      <main className={styles.content}>
        <SummaryCards expenses={filteredExpenses} />

        <Filters
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <div className={styles.mainGrid}>
          <ExpenseTable
            expenses={filteredExpenses}
            onDelete={deleteExpense}
            onEdit={setEditingExpense}
          />

          <div className={styles.rightPanel}>
            <ExpenseForm
              addExpense={addExpense}
              updateExpense={updateExpense}
              editingExpense={editingExpense}
            />

            <BudgetPanel expenses={filteredExpenses} />
          </div>
        </div>

        <div className={styles.chartGrid}>
          <CategoryPieChart expenses={filteredExpenses} />

          {/* <CategoryBarChart
            expenses={filteredExpenses}
          /> */}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

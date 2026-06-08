import styles from "./Filters.module.css";

function Filters({
  categoryFilter,
  setCategoryFilter,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  const clearFilters = () => {
    setCategoryFilter("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className={styles.filters}>
      <select
        value={categoryFilter}
        onChange={(e) =>
          setCategoryFilter(e.target.value)
        }
      >
        <option value="">
          All Categories
        </option>

        <option value="Food">
          Food
        </option>

        <option value="Transport">
          Transport
        </option>

        <option value="Bills">
          Bills
        </option>

        <option value="Entertainment">
          Entertainment
        </option>

        <option value="Other">
          Other
        </option>
      </select>

      <input
        type="date"
        value={startDate}
        onChange={(e) =>
          setStartDate(e.target.value)
        }
      />

      <span className={styles.arrow}>
        →
      </span>

      <input
        type="date"
        value={endDate}
        onChange={(e) =>
          setEndDate(e.target.value)
        }
      />

      <button
        className={styles.clearBtn}
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
}

export default Filters;
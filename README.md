# Mini Expense Tracker

A modern and responsive Expense Tracker built with React and Vite that helps users manage their daily spending. Users can add, edit, delete, filter, and analyze expenses through interactive charts and summary cards. The application also supports CSV export and local data persistence using browser Local Storage.

---

## Live Demo Links

### Application
https://mini-expense-tracker-ltsz.vercel.app/

### GitHub Repository
https://github.com/robingusain/Mini-Expense-Tracker

---

## Project Title & Brief Description

**Exercise 2: Mini Expense Tracker**

This project was developed as part of the Mini Expense Tracker exercise. The application allows users to track daily expenses by recording the amount, category, date, and notes for each transaction. Users can view expenses in a sortable table, edit or delete existing entries, apply category and date filters, visualize spending patterns using charts, and export visible expense data as a CSV file. Data is persisted locally using the browser's Local Storage, ensuring information remains available after page refreshes.

---

## Features

### Core Features

- Add new expenses
- Edit existing expenses
- Delete expenses
- View all expenses in a table
- Filter expenses by category
- Filter expenses by date range
- Total monthly spending summary
- Total spending by category
- Highest expense tracking

### Bonus Features

- CSV export functionality
- Local Storage persistence
- Expense distribution Pie Chart
- Category-wise Bar Chart
- Responsive dashboard layout

---

## Tech Stack

### Frontend

| Technology | Purpose |
|------------|----------|
| React | Component-based UI development |
| Vite | Fast build tool and development server |
| CSS Modules | Scoped and maintainable styling |
| Recharts | Pie and Bar chart visualization |
| React Icons | Dashboard icons and UI enhancements |
| Local Storage API | Client-side persistence |

### Why These Technologies?

- **React** provides reusable and maintainable components.
- **Vite** offers fast startup and optimized builds.
- **CSS Modules** prevent style conflicts across components.
- **Recharts** simplifies chart creation and visualization.
- **React Icons** improves UI consistency.
- **Local Storage** enables persistence without requiring a backend.

---

## How to Run Locally

### Prerequisites

Ensure the following is installed:

- Node.js (v18 or later)

### Clone the Repository

```bash
git clone https://github.com/robingusain/Mini-Expense-Tracker.git
cd Mini-Expense-Tracker
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Open in Browser

```text
http://localhost:5173
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## API Documentation

### Current Implementation

This project currently uses browser Local Storage for persistence and does not include a backend API.

### Proposed REST API (Future Enhancement)

#### Get All Expenses

```http
GET /api/expenses
```

Response:

```json
[
  {
    "id": 1,
    "amount": 500,
    "category": "Food",
    "date": "2026-06-08",
    "note": "Lunch"
  }
]
```

---

#### Create Expense

```http
POST /api/expenses
```

Request Body:

```json
{
  "amount": 500,
  "category": "Food",
  "date": "2026-06-08",
  "note": "Lunch"
}
```

Response:

```json
{
  "id": 1,
  "amount": 500,
  "category": "Food",
  "date": "2026-06-08",
  "note": "Lunch"
}
```

---

#### Update Expense

```http
PUT /api/expenses/:id
```

Request Body:

```json
{
  "amount": 750,
  "category": "Food",
  "date": "2026-06-08",
  "note": "Dinner"
}
```

Response:

```json
{
  "message": "Expense updated successfully"
}
```

---

#### Delete Expense

```http
DELETE /api/expenses/:id
```

Response:

```json
{
  "message": "Expense deleted successfully"
}
```

---

## Project Structure

```text
Mini-Expense-Tracker/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── BudgetPanel/
│   │   ├── CategoryBarChart/
│   │   ├── CategoryPieChart/
│   │   ├── ExpenseForm/
│   │   ├── ExpenseTable/
│   │   ├── Filters/
│   │   ├── Sidebar/
│   │   └── SummaryCards/
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   │
│   └── assets/
│
├── package.json
├── vite.config.js
└── README.md
```

### Folder Overview

| Folder/File | Description |
|------------|-------------|
| components | Reusable UI components |
| pages | Main application pages |
| assets | Images and static resources |
| App.jsx | Root application component |
| main.jsx | React application entry point |
| package.json | Project dependencies and scripts |
| vite.config.js | Vite configuration |

---

## Data Persistence

Expense data is stored in the browser using Local Storage.

```javascript
localStorage.setItem("expenses", JSON.stringify(expenses));
```

This allows expense records to remain available even after refreshing the page.

---

## CSV Export

Users can export the currently visible expenses into a downloadable CSV file.

Example output:

```csv
Date,Category,Note,Amount
2026-06-08,Food,Lunch,500
2026-06-08,Transport,Cab,250
2026-06-09,Bills,Electricity Bill,1200
```

---

## Next Steps

The following features were intentionally left out due to project scope and time constraints.

### Backend Integration

- Node.js + Express API
- SQLite or PostgreSQL database
- RESTful expense management endpoints

### Authentication

- User registration
- Login and logout
- Protected dashboard routes

### Advanced Budgeting

- Category-wise budgets
- Budget exceeded notifications
- Monthly savings goals

### Analytics

- Monthly spending trends
- Expense forecasting
- Category comparison reports

### Testing

- Unit testing with Vitest
- Component testing
- End-to-end testing

### Deployment Improvements

- Docker support
- CI/CD pipeline
- Environment configuration

---

## Author

**Robin Gusain**

GitHub: https://github.com/robingusain

Live Project: https://mini-expense-tracker-ltsz.vercel.app/

---

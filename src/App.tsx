import { Routes, Route } from "react-router-dom";
import Registration from "./Reg-Login/Registration";
import Login from "./Reg-Login/Login";
import Dashboard from "./Dashborad/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Records from "./Dashborad/Records"; // import records
// (later add Analysis, Budgets, Accounts, etc.)

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <Registration />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* Protected route with nested children */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="records" element={<Records />} />
        {/* <Route path="analysis" element={<Analysis />} /> */}
        {/* <Route path="budgets" element={<Budgets />} /> */}
        {/* <Route path="accounts" element={<Accounts />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

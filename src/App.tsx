import { Routes, Route } from "react-router-dom";
import Registration from "./Reg-Login/Registration";
import Login from "./Reg-Login/Login";
import Dashboard from "./Dashborad/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

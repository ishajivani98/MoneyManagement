import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";

type RecordType = {
  amount: string;
  type: string;
  account: string;
  category: string;
  notes: string;
  date: string;
  month: number;
};

function Dashboard() {
  // Shared state between Records and Analysis
  const [records, setRecords] = useState<RecordType[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

  return (
    <div className="flex min-h-screen">
      {/* Sidebar / Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 bg-[#001a00] p-6">
        {/* Outlet provides context to child routes */}
        <Outlet context={{ records, setRecords, currentMonth, setCurrentMonth }} />
      </div>
    </div>
  );
}

export default Dashboard;

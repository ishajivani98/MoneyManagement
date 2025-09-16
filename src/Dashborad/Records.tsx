import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Records() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculator
  const [calcValue, setCalcValue] = useState("0");

  // Record fields
  const [transactionType, setTransactionType] = useState("Income");
  const [account, setAccount] = useState("💳 Account");
  const [category, setCategory] = useState("🏷 Category");
  const [notes, setNotes] = useState("");

  // All saved records
  const [records, setRecords] = useState<{
    amount: string;
    type: string;
    account: string;
    category: string;
    notes: string;
    date: string;
    month: number;
  }[]>([]);

  const prevMonth = () => setCurrentMonth((prev) => (prev - 1 + 12) % 12);
  const nextMonth = () => setCurrentMonth((prev) => (prev + 1) % 12);

  const handleCalcClick = (val: string) => {
    if (val === "=") {
      try {
        // eslint-disable-next-line no-eval
        setCalcValue(eval(calcValue.replace("×", "*").replace("÷", "/")).toString());
      } catch {
        setCalcValue("Error");
      }
    } else if (val === "C") {
      setCalcValue("0");
    } else {
      setCalcValue((prev) =>
        prev === "0" || prev === "Error" ? val : prev + val
      );
    }
  };

  const handleSave = () => {
    const newRecord = {
      amount: calcValue,
      type: transactionType,
      account,
      category,
      notes,
      date: new Date().toLocaleDateString(),
      month: currentMonth,
    };

    setRecords((prev) => [...prev, newRecord]);

    // Reset form
    setCalcValue("0");
    setNotes("");
    setTransactionType("Income");
    setAccount("💳 Account");
    setCategory("🏷 Category");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#001a00] relative">
      <main className="flex-1 p-8">
        <h1 className="text-2xl text-white font-semibold mb-6">💰 Records</h1>

        {/* Month Changer */}
        <div className="bg-[#002b00] rounded-lg p-6 mb-6">
          <div className="flex items-center justify-center text-white space-x-4">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-green-900 rounded-full transition"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </button>
            <div className="text-lg font-bold">{months[currentMonth]}</div>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-green-900 rounded-full transition"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* Records List */}
        <div className="space-y-4 text-white">
          {records.filter((r) => r.month === currentMonth).length === 0 ? (
            <div className="text-center text-gray-400">No records for {months[currentMonth]}</div>
          ) : (
            records
              .filter((r) => r.month === currentMonth)
              .map((record, idx) => (
                <div
                  key={idx}
                  className="bg-[#002b00] p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <div className="font-semibold">{record.type}</div>
                    <div className="text-sm text-gray-400">{record.notes || "No notes"}</div>
                    <div className="text-xs text-gray-500">{record.date}</div>
                  </div>
                  <div className="text-lg font-bold">
                    {record.type === "Expense" ? "-" : "+"}${record.amount}
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Add Button */}
        <div className="flex justify-end mt-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            <AddIcon style={{ fontSize: "32px" }} />
          </button>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] rounded-xl shadow-lg p-6 w-[420px] text-gray-200 relative">

            {/* Header with Cancel and Save */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-green-800 font-semibold"
              >
                ✕ Cancel
              </button>
              <button onClick={handleSave} className="text-green-800 font-semibold">
                ✓ Save
              </button>
            </div>

            {/* Tabs */}
            <div className="flex justify-center space-x-6 mb-6">
              {["Income", "Expense", "Transfer"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTransactionType(type)}
                  className={`pb-1 border-b-2 ${
                    transactionType === type
                      ? "text-green-800 border-green-800"
                      : "text-gray-400 border-green-900"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Account & Category */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button
                className="bg-[#2b2b2b] p-3 rounded-lg flex items-center justify-center"
                onClick={() => setAccount("💳 Account")}
              >
                {account}
              </button>
              <button
                className="bg-[#2b2b2b] p-3 rounded-lg flex items-center justify-center"
                onClick={() => setCategory("🏷 Category")}
              >
                {category}
              </button>
            </div>

            {/* Notes */}
            <textarea
              placeholder="Add notes"
              className="w-full bg-[#2b2b2b] p-3 rounded-lg text-sm text-gray-300 mb-4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            {/* Calculator */}
            <div className="bg-[#2b2b2b] p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center text-3xl mb-3">
                <span></span>
                <span>{calcValue}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {["C", "9", "7", "8", "+", "6", "4", "5", "-", "3", "1", "2", "×", "÷", "0", ".", "="].map(
                  (key) => (
                    <button
                      key={key}
                      onClick={() => handleCalcClick(key)}
                      className="p-3 rounded-lg bg-[#1f1f1f] hover:bg-[#333] text-lg"
                    >
                      {key}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex justify-between text-sm text-gray-400">
              <span>{new Date().toLocaleDateString()}</span>
              <span>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Records;

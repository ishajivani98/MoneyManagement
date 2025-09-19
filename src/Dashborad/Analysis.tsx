import { useOutletContext } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type RecordType = {
  amount: string;
  type: string;
  month: number;
};

type ContextType = {
  records: RecordType[];
  currentMonth: number;
};

function Analysis() {
  const { records, currentMonth } = useOutletContext<ContextType>();

  const monthRecords = records.filter((r) => r.month === currentMonth);

  const income = monthRecords
    .filter((r) => r.type === "Income")
    .reduce((sum, r) => sum + parseFloat(r.amount), 0);

  const expense = monthRecords
    .filter((r) => r.type === "Expense")
    .reduce((sum, r) => sum + parseFloat(r.amount), 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: [
          "rgba(34, 197, 94, 0.6)",
          "rgba(239, 68, 68, 0.6)",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-[#002b00] p-6 rounded-lg text-white mt-6 max-w-md mx-auto">
      <h2 className="text-center mb-4 font-semibold text-lg">
        Income vs Expense
      </h2>
      <Pie data={data} />
    </div>
  );
}

export default Analysis;

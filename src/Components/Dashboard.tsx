import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  Search,
  PlusCircle,
  DollarSign,
  Users,
  Clock,
  AlertCircle,
} from "lucide-react";
import Navbar from "./Navbar";

const monthlyData = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 2390 },
];

const feeDistribution = [
  { name: "Tuition", value: 40 },
  { name: "Library", value: 15 },
  { name: "Sports", value: 15 },
  { name: "Hostel", value: 20 },
  { name: "Lab", value: 10 },
];

const COLORS = ["#3182CE", "#F59E0B", "#10B981", "#EF4444", "#3B82F6"];
const recentTransactions = [
  { id: 1, student: "Ali", amount: 500, date: "2024-09-01", status: "Paid" },
  { id: 2, student: "Zain", amount: 750, date: "2024-09-02", status: "Pending" },
  { id: 3, student: "Umar", amount: 1000, date: "2024-09-03", status: "Overdue" },
  { id: 4, student: "Fatima", amount: 600, date: "2024-09-04", status: "Paid" },
  { id: 5, student: "Ibrahim", amount: 800, date: "2024-09-05", status: "Pending" },
];

interface AllProps {
  onLogout: () => void;
}

const Dashboard: React.FC<AllProps> = ({ onLogout }) => {
  return (
    <div className="bg-[#DEEBF4] min-h-screen">
      <Navbar title="Dashboard" onLogout={onLogout} />
      <div className="xl:max-w-[90%] m-auto px-4 sm:px-8 py-8">
        <header className="bg-white shadow rounded-lg mb-6">
          <div className="m-auto md:py-5 py-4 px-4">
            <h1 className="text-lg md:text-xl xl:text-2xl font-medium text-gray-900">FMS Dashboard</h1>
          </div>
        </header>
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search Student..."
              className="w-full pl-10 pr-4 py-2 border border-customBlue rounded-lg focus:outline-none focus:bg-gray-100"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg transform active:translate-y-0.5 transition-colors focus:outline-none hover:bg-blue-700">
            <PlusCircle size={18} className="mr-2" />
            Add Payment
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            { title: "Total Collected", amount: "45,000", color: "from-blue-700 to-blue-500", icon: DollarSign },
            { title: "Pending", amount: "12,000", color: "from-amber-600 to-amber-400", icon: Clock },
            { title: "Overdue", amount: "3,000", color: "from-red-600 to-red-400", icon: AlertCircle },
            { title: "Total Students", amount: "1,234", color: "from-emerald-600 to-emerald-400", icon: Users },
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${card.color} rounded-lg shadow-md p-6 text-white flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105`}
            >
              <card.icon size={24} className="mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-2xl font-bold">{card.amount}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-zinc-900">Monthly Fee Collection</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{fill: "#4A5568"}} />
                  <YAxis tick={{fill: "#4A5568"}} />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#3182CE" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-zinc-900">Fee Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={feeDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {feeDistribution.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6 text-zinc-900">Recent Transactions</h3>
          <div className="overflow-x-auto overflow-hidden">
            <table className="min-w-[700px] w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-800">
                  <th className="p-3 font-semibold text-white">Student</th>
                  <th className="p-3 font-semibold text-white">Amount</th>
                  <th className="p-3 font-semibold text-white">Date</th>
                  <th className="p-3 font-semibold text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-blue-100">
                    <td className="p-3">{transaction.student}</td>
                    <td className="p-3">RS {transaction.amount}</td>
                    <td className="p-3">{transaction.date}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          transaction.status === "Paid"
                            ? "bg-green-100 text-green-800"
                            : transaction.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
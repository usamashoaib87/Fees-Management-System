import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
interface AllProps {
  onLogout: () => void;
  isOpen: boolean;
}
const ReceiveFee: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const tableRows = Array(5).fill({});
  const period = [
    { id: "1 month", name: "1 month" },
    { id: "2 month", name: "2 month" },
  ];
  const type = [
    { id: "cash", name: "cash" },
    { id: "online", name: "online" },
  ];
  return (
    <div className="m-auto">
      <Navbar title="Receive Fee" onLogout={onLogout} />
      <div className="p-5">
        <div className="border border-customBlue rounded bg-[#EAF1F6] xl:max-w-[90%] m-auto p-6">
          <form>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[50%] p-2">
                <div className="border border-customBlue bg-[#DEEBF4] rounded p-5 mb-4">
                  <h2 className="text-base sm:text-sm md:text-base lg:text-lg text-zinc-900 font-medium md:font-bold mb-3 flex justify-center">
                    Fee Period
                  </h2>
                  <div
                    className={
                      isOpen
                        ? "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2 gap-3 transition-all duration-300"
                        : "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-300"
                    }
                  >
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[41%] xl:w-[40%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Period:
                      </label>
                      <select className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4">
                        <option value="">Select Period</option>
                        {period.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[39%] w-[33%]">
                        V. Date:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4 lg:w-3/5"
                        type="date"
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[39%] w-[33%]">
                        From:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4 lg:w-3/5"
                        type="date"
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Fee To:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4 lg:w-3/5"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="border border-customBlue bg-[#DEEBF4] rounded p-5 mb-4">
                  <h2 className="text-base sm:text-sm md:text-base lg:text-lg text-zinc-900 font-medium md:font-bold mb-3 flex justify-center">
                    Student Detail
                  </h2>
                  <div
                    className={
                      isOpen
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-300"
                        : "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-300"
                    }
                  >
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Std ID:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        RollNo:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Period:
                      </label>
                      <select className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4">
                        <option value="">Select Period</option>
                        {period.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="xl:col-span-1 lg:col-span-2 col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[18%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Std N:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="xl:col-span-1 lg:col-span-2 col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[18%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Father N:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="border border-customBlue bg-[#DEEBF4] rounded p-5">
                  <div
                    className={
                      isOpen
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-300"
                        : "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-300"
                    }
                  >
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs sm:text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[39%] w-[33%]">
                        R. Date:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4 lg:w-3/5"
                        type="date"
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs sm:text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Late F:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <label className="text-zinc-900 text-xs sm:text-xs lg:text-base md:font-medium 2xl:w-[35%] xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[35%] w-[30.5%]">
                        Type:
                      </label>
                      <select className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500">
                        <option value="">Select Type</option>
                        {type.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap justify-between gap-2">
                    <div className="flex justify-start">
                      <button className="px-1 py-1 w-[120px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                        Not Received
                      </button>
                    </div>
                    <div className="flex justify-end gap-3">
                      <button className="px-1 py-1 w-[110px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                        Received
                      </button>
                      <button className="px-1 py-1 w-[110px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                        Exit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] p-2">
                <div className="border border-customBlue bg-[#DEEBF4] rounded p-5 mb-3">
                  <div
                    className={
                      isOpen
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-300"
                        : "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-300"
                    }
                  >
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[45%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Bill No:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="border border-customBlue bg-[#DEEBF4] rounded p-5 mb-4">
                  <h2 className="text-base sm:text-sm md:text-base lg:text-lg text-zinc-900 font-medium md:font-bold mb-3 flex justify-center">
                    Student Fee BreakUp
                  </h2>
                  <div
                    className={
                      isOpen
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-300"
                        : "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-300"
                    }
                  >
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Sch Adm:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Tu. Fee:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Exam F:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        N.B Fee:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        S. Vac:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Prospec:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Ab. Fine:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        An. Fund:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Cert. Fee:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Others:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        B. Adm:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        B. Reg:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex items-center">
                      <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                        Arrears:
                      </label>
                      <input
                        className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col">
                  <div className="border border-customBlue bg-[#DEEBF4] rounded p-5">
                    <div
                      className={
                        isOpen
                          ? "grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-300"
                          : "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-300"
                      }
                    >
                      <div className="sm:col-span-1 col-span-2 flex items-center">
                        <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[45%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                          T. Fee:
                        </label>
                        <input
                          className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                          type="text"
                        />
                      </div>
                      <div className="sm:col-span-1 col-span-2 flex items-center">
                        <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[45%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                          Discount:
                        </label>
                        <input
                          className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                          type="text"
                        />
                      </div>
                      <div className="sm:col-span-1 col-span-2 flex items-center">
                        <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[45%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                          N. Value:
                        </label>
                        <input
                          className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-3">
                    <button className="px-1 py-1 w-[110px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                      Bad Debt
                    </button>
                    <button className="px-1 py-1 w-[110px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                      Update Fee
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
            <div className="overflow-x-auto overflow-hidden">
              <table className="min-w-[900px] w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-blue-800 text-white text-xs sm:text-sm md:text-base lg:text-lg">
                    <th className="border border-gray-300 p-2 text-center">
                      SrNo
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Student ID
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Roll No
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Student Name
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Bill No
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      FeeMonth
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Arrears
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Fee
                    </th>
                    <th className="border border-gray-300 p-2 text-center">
                      Received
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((_, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#DEEBF4]"}
                      style={{ fontSize: "inherit" }}
                    >
                      <td className="border border-gray-300 p-1 text-center text-white bg-blue-800 w-[5%]">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 p-1 text-center w-[15%]"></td>
                      <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                      <td className="border border-gray-300 p-1 text-center w-[25%]"></td>
                      <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                      <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                      <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                      <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                      <td className="border border-gray-300 p-1 text-center w-[10%]">
                        <input
                          type="checkbox"
                          className="md:w-5 md:h-4 sm:w-4 sm:h-3"
                        />
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

export default ReceiveFee;

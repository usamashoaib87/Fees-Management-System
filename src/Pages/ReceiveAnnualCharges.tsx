import React, { useState } from "react";
import "../App.css";
import {
  FiPlus,
  FiSave,
  FiRefreshCw,
  FiEdit,
  FiTrash2,
  FiXCircle,
} from "react-icons/fi";
import Navbar from "../Components/Navbar";

interface AllProps {
  onLogout: () => void;
  isOpen?: boolean;
}

interface FormData {
  transNo: string;
  transDate: string;
}

interface FormErrors {
  transNo: boolean;
  transDate: boolean;
}

const ReceiveAnnualCharges: React.FC<AllProps> = ({
  onLogout,
  isOpen = false,
}) => {
  const [formData, setFormData] = useState<FormData>({
    transNo: "",
    transDate: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    transNo: false,
    transDate: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "transNo") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      transNo: !formData.transNo,
      transDate: !formData.transDate,
    };
    setFormErrors(errors);

    return !Object.values(errors).some(Boolean);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Data", formData);

      setFormData({
        transNo: "",
        transDate: "",
      });
      setFormErrors({
        transNo: false,
        transDate: false,
      });
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  const tableRows = Array(5).fill(null);

  const inputStyle = (fieldName: keyof FormErrors) => `
    flex-grow lg:px-3 px-1 md:p-1 border 
    ${formErrors[fieldName] ? "border-red-500" : "border-customBlue"}
    focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4
  `;

  const renderErrorMessages = () => {
    const errorMessages = [];
    if (formErrors.transNo) errorMessages.push("Transaction No is Required");
    if (formErrors.transDate)
      errorMessages.push("Transaction Date is Required");

    return errorMessages.map((message, index) => (
      <div key={index} className="text-red-500 text-sm mt-1">
        {message}
      </div>
    ));
  };

  return (
    <div className="m-auto">
      <Navbar title="Receive Ann Charges" onLogout={onLogout} />
      <div className="p-5">
        <div className="border border-customBlue rounded bg-[#EAF1F6] xl:max-w-[90%] m-auto p-8 pt-2">
          <div className="m-auto pb-2">
            <div className="flex flex-wrap sm:gap-1 justify-center">
              <button className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
                <FiPlus className="lg:text-lg text-yellow-600 group-hover:text-white transition-colors duration-200" />
                <span>Add</span>
              </button>
              <button className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
                <FiSave className="lg:text-lg text-blue-800 group-hover:text-white transition-colors duration-200" />
                <span>Save</span>
              </button>
              <button className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
                <FiRefreshCw className="lg:text-lg text-green-500 group-hover:text-white transition-colors duration-200" />
                <span>Refresh</span>
              </button>
              <button className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
                <FiEdit className="lg:text-lg text-blue-800 group-hover:text-white transition-colors duration-200" />
                <span>Edit</span>
              </button>
              <button className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
                <FiTrash2 className="lg:text-lg text-red-500 group-hover:text-white transition-colors duration-200" />
                <span>Delete</span>
              </button>
              <button className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
                <FiXCircle className="lg:text-lg text-gray-500 group-hover:text-white transition-colors duration-200" />
                <span>Exit</span>
              </button>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="border border-customBlue bg-[#DEEBF4] rounded p-5">
              <div
                className={
                  isOpen
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"
                }
              >
                <div className="sm:col-span-1 col-span-2 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Trans No:
                  </label>
                  <input
                    name="transNo"
                    value={formData.transNo}
                    onChange={handleChange}
                    className={inputStyle("transNo")}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                  />
                </div>
                <div className="sm:col-span-1 col-span-2 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Trans Date:
                  </label>
                  <input
                    name="transDate"
                    value={formData.transDate}
                    onChange={handleChange}
                    className={inputStyle("transDate")}
                    type="date"
                  />
                </div>
              </div>
              {renderErrorMessages()}
            </div>
          </form>
          <div className="overflow-x-auto overflow-hidden mt-5">
            <table className="min-w-[1000px] w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-blue-800 text-white text-xs sm:text-sm md:text-base lg:text-lg">
                  <th className="border border-gray-300 p-2 text-center">
                    SrNo
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Student ID
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Student Name
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Class
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Section
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    T Charges
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Al Rcvd
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Blnc Am
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
                  >
                    <td className="border border-gray-300 p-1 text-center text-white bg-blue-800 w-[5%]">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 p-1 text-center w-[15%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[15%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[20%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[10%]"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={handleSave}
              className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveAnnualCharges;

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
  period: string;
  serialNo: string;
  feeFrom: string;
  feeTo: string;
  class: string;
  schAdm: string;
  tutionFee: string;
  examFee: string;
  nBookFee: string;
  sVacation: string;
  prospectus: string;
  absentFine: string;
  annualFund: string;
  fine: string;
  certFee: string;
  other: string;
  boardAdm: string;
  boardReg: string;
  totalFee: string;
}

interface FormErrors {
  [key: string]: boolean;
}

const FeeStructure: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const initialFormData: FormData = {
    period: "",
    serialNo: "",
    feeFrom: "",
    feeTo: "",
    class: "",
    schAdm: "",
    tutionFee: "",
    examFee: "",
    nBookFee: "",
    sVacation: "",
    prospectus: "",
    absentFine: "",
    annualFund: "",
    fine: "",
    certFee: "",
    other: "",
    boardAdm: "",
    boardReg: "",
    totalFee: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const numericFields = [
      "serialNo",
      "schAdm",
      "tutionFee",
      "examFee",
      "nBookFee",
      "sVacation",
      "prospectus",
      "absentFine",
      "annualFund",
      "fine",
      "certFee",
      "other",
      "boardAdm",
      "boardReg",
      "totalFee",
    ];

    if (numericFields.includes(name) && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (formData[key as keyof FormData] === "") {
        errors[key] = true;
        isValid = false;
      }
    });

    if (formData.feeFrom && formData.feeTo) {
      if (new Date(formData.feeTo) <= new Date(formData.feeFrom)) {
        errors.feeTo = true;
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Data", formData);
      setFormData(initialFormData);
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  const inputStyle = (fieldName: string) => `
    flex-grow lg:px-3 px-1 md:p-1 border rounded 
    ${formErrors[fieldName] ? "border-red-500" : "border-customBlue"}
    focus:bg-gray-200 focus:outline-none active:border-blue-500 w-3/4
  `;

  const renderErrorMessages = () => {
    const errorMessages = Object.entries(formErrors)
      .filter(([, hasError]) => hasError)
      .map(([fieldName]) => {
        if (fieldName === "feeTo") {
          return "Fee To date must be greater than Fee From date";
        }
        return `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`;
      });

    return errorMessages.map((message, index) => (
      <div key={index} className="text-red-500 text-sm mt-1">
        {message}
      </div>
    ));
  };

  const period = [
    { id: "1 month", name: "1 month" },
    { id: "2 month", name: "2 month" },
  ];
  const className = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
  ];

  return (
    <div className="m-auto">
      <Navbar title="Fee Structure" onLogout={onLogout} />
      <form className="p-5">
        <div className="border border-customBlue rounded bg-[#EAF1F6] rounded xl:max-w-[90%] m-auto p-8 pt-2">
          <div className="m-auto pb-2">
            <div className="flex flex-wrap sm:gap-1 justify-center">
              <button className="flex flex-col items-center justify-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
                <FiPlus className="lg:text-lg text-yellow-600 group-hover:text-white transition-colors duration-200" />
                <span>Add</span>
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group "
              >
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
          <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-5">
            <h2 className="text-base sm:text-sm md:text-base lg:text-lg font-medium md:font-bold text-zinc-900 mb-3 flex justify-center">
              Head Detail
            </h2>
            <div
              className={
                isOpen
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"
              }
            >
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Period:
                </label>
                <select
                  name="period"
                  value={formData.period}
                  onChange={handleChange}
                  className={inputStyle("period")}
                >
                  <option value="">Select Period</option>
                  {period.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Serial No:
                </label>
                <input
                  name="serialNo"
                  value={formData.serialNo}
                  onChange={handleChange}
                  className={inputStyle("serialNo")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Fee From:
                </label>
                <input
                  name="feeFrom"
                  value={formData.feeFrom}
                  onChange={handleChange}
                  className={inputStyle("feeFrom")}
                  type="date"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Fee To:
                </label>
                <input
                  name="feeTo"
                  value={formData.feeTo}
                  onChange={handleChange}
                  className={inputStyle("feeTo")}
                  type="date"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Class:
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className={inputStyle("class")}
                >
                  <option value="">Select Class</option>
                  {className.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-5">
            <h2 className="text-base sm:text-sm md:text-base lg:text-lg font-medium md:font-bold text-zinc-900 mb-3 flex justify-center">
              Student Fee BreakUp
            </h2>
            <div
              className={
                isOpen
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"
              }
            >
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Sch Adm:
                </label>
                <input
                  name="schAdm"
                  value={formData.schAdm}
                  onChange={handleChange}
                  className={inputStyle("schAdm")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Tution Fee:
                </label>
                <input
                  name="tutionFee"
                  value={formData.tutionFee}
                  onChange={handleChange}
                  className={inputStyle("tutionFee")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Exam Fee:
                </label>
                <input
                  name="examFee"
                  value={formData.examFee}
                  onChange={handleChange}
                  className={inputStyle("examFee")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  N. B Fee:
                </label>
                <input
                  name="nBookFee"
                  value={formData.nBookFee}
                  onChange={handleChange}
                  className={inputStyle("nBookFee")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  S. Vacation:
                </label>
                <input
                  name="sVacation"
                  value={formData.sVacation}
                  onChange={handleChange}
                  className={inputStyle("sVacation")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Prospectus:
                </label>
                <input
                  name="prospectus"
                  value={formData.prospectus}
                  onChange={handleChange}
                  className={inputStyle("prospectus")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Abs Fine:
                </label>
                <input
                  name="absentFine"
                  value={formData.absentFine}
                  onChange={handleChange}
                  className={inputStyle("absentFine")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Ann Fund:
                </label>
                <input
                  name="annualFund"
                  value={formData.annualFund}
                  onChange={handleChange}
                  className={inputStyle("annualFund")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Fine:
                </label>
                <input
                  name="fine"
                  value={formData.fine}
                  onChange={handleChange}
                  className={inputStyle("fine")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Cert. Fee:
                </label>
                <input
                  name="certFee"
                  value={formData.certFee}
                  onChange={handleChange}
                  className={inputStyle("certFee")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Other:
                </label>
                <input
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  className={inputStyle("other")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Board Adm:
                </label>
                <input
                  name="boardAdm"
                  value={formData.boardAdm}
                  onChange={handleChange}
                  className={inputStyle("boardAdm")}
                  type="text"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Board Reg:
                </label>
                <input
                  name="boardReg"
                  value={formData.boardReg}
                  onChange={handleChange}
                  className={inputStyle("boardReg")}
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium lg:w-[35%] md:w-[30%] sm:w-[30%] w-2/6">
                  Total Fee:
                </label>
                <input
                  name="totalFee"
                  value={formData.totalFee}
                  onChange={handleChange}
                  className={inputStyle("totalFee")}
                  type="text"
                />
              </div>
            </div>
          </div>
          {renderErrorMessages()}
          <div className="flex justify-end gap-3 mt-5">
            <button className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-zinc-900 hover:text-white bg-white active:shadow-inner transform active:translate-y-0.5 ">
              View All
            </button>
            <button className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-zinc-900 hover:text-white bg-white active:shadow-inner transform active:translate-y-0.5 ">
              View
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeeStructure;

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
  isOpen: boolean;
}

interface FormData {
  stdId: string;
  rollNo: string;
  period: string;
  stdName: string;
  fatherName: string;
  leftReason: string;
  reactiveReason: string;
  activeDeactive: boolean;
  date: string;
  transfer: boolean;
}

interface FormErrors {
  stdId: boolean;
  rollNo: boolean;
  period: boolean;
  stdName: boolean;
  fatherName: boolean;
  leftReason: boolean;
  reactiveReason: boolean;
  date: boolean;
  activeDeactive: boolean;
  transfer: boolean;
}

const DeactivateStudent: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const [formData, setFormData] = useState<FormData>({
    stdId: "",
    rollNo: "",
    period: "",
    stdName: "",
    fatherName: "",
    leftReason: "",
    reactiveReason: "",
    activeDeactive: false,
    date: "",
    transfer: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    stdId: false,
    rollNo: false,
    period: false,
    stdName: false,
    fatherName: false,
    leftReason: false,
    reactiveReason: false,
    date: false,
    activeDeactive: false,
    transfer: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let sanitizedValue = value;

    if (name === 'stdId' || name === 'rollNo') {
      sanitizedValue = value.replace(/[^0-9]/g, '');
    } else if (['stdName', 'fatherName', 'leftReason', 'reactiveReason'].includes(name)) {
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : sanitizedValue,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      stdId: !formData.stdId,
      rollNo: !formData.rollNo,
      period: !formData.period,
      stdName: !formData.stdName,
      fatherName: !formData.fatherName,
      leftReason: !formData.leftReason,
      reactiveReason: !formData.reactiveReason,
      date: !formData.date,
      activeDeactive: !formData.activeDeactive,
      transfer: !formData.transfer,
    };

    setFormErrors(errors);

    return !Object.values(errors).some(Boolean);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Data", formData);
      setFormData({
        stdId: "",
        rollNo: "",
        period: "",
        stdName: "",
        fatherName: "",
        leftReason: "",
        reactiveReason: "",
        activeDeactive: false,
        date: "",
        transfer: false,
      });
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  const inputStyle = (fieldName: keyof FormErrors) => `
    flex-grow lg:px-3 px-1 md:p-1 border rounded 
    ${formErrors[fieldName] ? 'border-red-500' : 'border-customBlue'}
    focus:bg-gray-200 focus:outline-none active:border-blue-500 w-3/4
  `;

  const renderErrorMessages = () => {
    const errorMessages = Object.entries(formErrors)
      .filter(([, hasError]) => hasError)
      .map(([fieldName]) => {
        if (fieldName === 'activeDeactive') {
          return "Active/De-active must be selected";
        }
        if (fieldName === 'transfer') {
          return "Transfer must be selected";
        }
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      });
    
    return errorMessages.map((message, index) => (
      <div key={index} className="text-red-500 text-sm mt-1">{message}</div>
    ));
  };
  const period = [
    { id: "1 month", name: "1 month" },
    { id: "2 month", name: "2 month" },
  ];

  return (
    <div className="m-auto">
      <Navbar title="Deactivate Student" onLogout={onLogout} />
      <div className="p-5">
        <form className="border border-customBlue rounded bg-[#EAF1F6] rounded xl:max-w-[90%] m-auto p-8 pt-2">
        <div className="m-auto pb-2">
          <div className="flex flex-wrap sm:gap-1 justify-center">
            <button className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-md hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
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
          <div className="border border-customBlue bg-[#DEEBF4] rounded p-5">
            <div className={isOpen ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300":"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"}>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Student ID:
                </label>
                <input
                  name="stdId"
                  value={formData.stdId}
                  onChange={handleChange}
                  className={inputStyle('stdId')}
                  type="text"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Roll No:
                </label>
                <input
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleChange}
                  className={inputStyle('rollNo')}
                  type="text"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Period:
                </label>
                <select
                  name="period"
                  value={formData.period}
                  onChange={handleChange}
                  className={inputStyle('period')}
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
                  Stud Name:
                </label>
                <input
                  name="stdName"
                  value={formData.stdName}
                  onChange={handleChange}
                  className={inputStyle('stdName')}
                  type="text"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  F. Name:
                </label>
                <input
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className={inputStyle('fatherName')}
                  type="text"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Left Reason:
                </label>
                <input
                  name="leftReason"
                  value={formData.leftReason}
                  onChange={handleChange}
                  className={inputStyle('leftReason')}
                  type="text"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Reactive Reason:
                </label>
                <input
                  name="reactiveReason"
                  value={formData.reactiveReason}
                  onChange={handleChange}
                  className={inputStyle('reactiveReason')}
                  type="text"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Date:
                </label>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={inputStyle('date')}
                  type="date"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center lg:gap-[77px] md:gap-[35px] sm:gap-[40px] gap-[22px]">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium">
                  Active/De-active:
                </label>
                <input
                name="activeDeactive"
                checked={formData.activeDeactive}
                onChange={handleChange}
                className={`w-5 h-5 border rounded focus:outline-none focus:border-blue-500 ${formErrors.activeDeactive ? 'border-red-500' : ''}`}
                type="checkbox"
              />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center lg:gap-[77px] md:gap-[35px] sm:gap-[40px] gap-[22px]">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium">
                  Transfer:
                </label>
                <input
                name="transfer"
                checked={formData.transfer}
                onChange={handleChange}
                className={`w-5 h-5 border rounded focus:outline-none focus:border-blue-500 ${formErrors.transfer ? 'border-red-500' : ''}`}
                type="checkbox"
              />
              </div>
            </div>
            {renderErrorMessages()}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeactivateStudent;

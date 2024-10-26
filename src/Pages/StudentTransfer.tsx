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
  serialNo: string;
  transDate: string;
  student: string;
  emptyInput: string;
}

interface FormErrors {
  serialNo: boolean;
  transDate: boolean;
  student: boolean;
}

const StudentTransfer: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const [formData, setFormData] = useState<FormData>({
    serialNo: "",
    transDate: "",
    student: "",
    emptyInput: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    serialNo: false,
    transDate: false,
    student: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === 'serialNo') {
      sanitizedValue = value.replace(/\D/g, ''); 
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      serialNo: !formData.serialNo,
      transDate: !formData.transDate,
      student: !formData.student,
    };
    setFormErrors(errors);

    return !Object.values(errors).some(Boolean);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Data", formData);
      setFormData({
        serialNo: "",
        transDate: "",
        student: "",
        emptyInput: "",
      });
      setFormErrors({
        serialNo: false,
        transDate: false,
        student: false,
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
    const errorMessages = [];
    if (formErrors.serialNo) errorMessages.push("Serial No is Required");
    if (formErrors.transDate) errorMessages.push("Trans Date is Required");
    if (formErrors.student) errorMessages.push("Student is Required");
    
    return errorMessages.map((message, index) => (
      <div key={index} className="text-red-500 text-sm mt-1">{message}</div>
    ));
  };

  const student = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
  ];

  return (
    <div className="m-auto">
      <Navbar title="Student Transfer" onLogout={onLogout} />
      <div className="p-5">
        <form className="border border-customBlue rounded bg-[#EAF1F6] xl:max-w-[90%] m-auto p-8 pt-2">
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
                  Serial No:
                </label>
                <input
                  name="serialNo"
                  value={formData.serialNo}
                  onChange={handleChange}
                  className={inputStyle('serialNo')}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
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
                  className={inputStyle('transDate')}
                  type="date"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Student:
                </label>
                <select
                  name="student"
                  value={formData.student}
                  onChange={handleChange}
                  className={inputStyle('student')}
                >
                  <option value="">Select Student</option>
                  {student.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <input
                  name="emptyInput"
                  value={formData.emptyInput}
                  onChange={handleChange}
                  className="flex-grow lg:px-3 px-1 md:p-1 border border-customBlue focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4"
                  type="text"
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

export default StudentTransfer;
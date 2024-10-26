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
  sectionId: string;
  sectionName: string;
}

interface FormErrors {
  sectionId: boolean;
  sectionName: boolean;
}

const DefineSection: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const [formData, setFormData] = useState<FormData>({
    sectionId: "",
    sectionName: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    sectionId: false,
    sectionName: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "sectionId") {
      sanitizedValue = value.replace(/[^0-9]/g, "");
    } else if (name === "sectionName") {
      sanitizedValue = value.replace(/[^a-zA-Z]/g, "");
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
      sectionId: !formData.sectionId,
      sectionName: !formData.sectionName,
    };
    setFormErrors(errors);

    return !Object.values(errors).some(Boolean);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Data", formData);
      setFormData({
        sectionId: "",
        sectionName: "",
      });
      setFormErrors({
        sectionId: false,
        sectionName: false,
      });
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  const inputStyle = (fieldName: keyof FormErrors) => `
    flex-grow lg:px-3 px-1 md:p-1 border rounded 
    ${formErrors[fieldName] ? "border-red-500" : "border-customBlue"}
    focus:bg-gray-200 focus:outline-none active:border-blue-500 w-3/4
  `;

  const renderErrorMessages = () => {
    const errorMessages = [];
    if (formErrors.sectionId) errorMessages.push("Section ID is Required");
    if (formErrors.sectionName) errorMessages.push("Section Name is Required");

    return errorMessages.map((message, index) => (
      <div key={index} className="text-red-500 text-sm mt-1">
        {message}
      </div>
    ));
  };

  return (
    <div className="m-auto">
      <Navbar title="Define Section" onLogout={onLogout} />
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
          <form className="border border-customBlue bg-[#DEEBF4] rounded p-5">
            <div className={isOpen ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300":"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"}>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Sec ID:
                </label>
                <input
                  name="sectionId"
                  value={formData.sectionId}
                  onChange={handleChange}
                  className={inputStyle("sectionId")}
                  type="text"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Sec Name:
                </label>
                <input
                  name="sectionName"
                  value={formData.sectionName}
                  onChange={handleChange}
                  className={inputStyle("sectionName")}
                  type="text"
                />
              </div>
            </div>
            {renderErrorMessages()}
            <div className="flex justify-end mt-5">
              <button
                type="button"
                onClick={handleSave}
                className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg rounded bg-white font-medium shadow-md hover:bg-blue-800 text-black hover:text-white border border-customBlue active:shadow-inner transform active:translate-y-0.5"
              >
                View List
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DefineSection;

import React, { useState } from "react";
import "../App.css";
import Navbar from "../Components/Navbar";

interface AllProps {
  onLogout: () => void;
  isOpen: boolean;
}

interface FormData {
  period: string;
  vDate: string;
  feeFrom: string;
  feeTo: string;
  stdId: string;
  dueDate: string;
  validDate: string;
  addArrears: boolean;
  emptyInput: string;
  deleteReason: string;
}

interface FormErrors {
  period: boolean;
  vDate: boolean;
  feeFrom: boolean;
  feeTo: boolean;
  stdId: boolean;
  dueDate: boolean;
  validDate: boolean;
  deleteReason: boolean;
}

const CreateFeeSingleStudent: React.FC<AllProps> = ({
  onLogout,
  isOpen = false,
}) => {
  const [formData, setFormData] = useState<FormData>({
    period: "",
    vDate: "",
    feeFrom: "",
    feeTo: "",
    stdId: "",
    dueDate: "",
    validDate: "",
    addArrears: false,
    emptyInput: "",
    deleteReason: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    period: false,
    vDate: false,
    feeFrom: false,
    feeTo: false,
    stdId: false,
    dueDate: false,
    validDate: false,
    deleteReason: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let sanitizedValue = value;

    if (name === "stdId") {
      sanitizedValue = value.replace(/[^0-9]/g, "");
    } else if (name === "deleteReason") {
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : sanitizedValue,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      period: !formData.period,
      vDate: !formData.vDate,
      feeFrom: !formData.feeFrom,
      feeTo: !formData.feeTo,
      stdId: !formData.stdId,
      dueDate: !formData.dueDate,
      validDate: !formData.validDate,
      deleteReason: !formData.deleteReason,
    };

    if (formData.feeFrom && formData.feeTo) {
      errors.feeTo = new Date(formData.feeTo) <= new Date(formData.feeFrom);
    }

    setFormErrors(errors);

    return !Object.values(errors).some(Boolean);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Data", formData);
      setFormData({
        period: "",
        vDate: "",
        feeFrom: "",
        feeTo: "",
        stdId: "",
        dueDate: "",
        validDate: "",
        addArrears: false,
        emptyInput: "",
        deleteReason: "",
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

  return (
    <div className="m-auto">
      <Navbar title="Fee Single Student" onLogout={onLogout} />
      <div className="p-5">
        <form className="border border-customBlue rounded bg-[#EAF1F6] rounded xl:max-w-[90%] m-auto p-8">
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
                  Vouc Date:
                </label>
                <input
                  name="vDate"
                  value={formData.vDate}
                  onChange={handleChange}
                  className={inputStyle("vDate")}
                  type="date"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
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
              <div className="sm:col-span-1 col-span-2 flex items-center">
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
            </div>
          </div>
          <div className="border border-customBlue bg-[#DEEBF4] rounded p-5 mt-5">
            <div
              className={
                isOpen
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"
              }
            >
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Student ID:
                </label>
                <input
                  name="stdId"
                  value={formData.stdId}
                  onChange={handleChange}
                  className={inputStyle("stdId")}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="border border-customBlue bg-[#DEEBF4] rounded p-5 mt-5">
            <div
              className={
                isOpen
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"
              }
            >
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Due Date:
                </label>
                <input
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className={inputStyle("dueDate")}
                  type="date"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                  Valid Date:
                </label>
                <input
                  name="validDate"
                  value={formData.validDate}
                  onChange={handleChange}
                  className={inputStyle("validDate")}
                  type="date"
                />
              </div>
              <div className="sm:col-span-1 col-span-2 flex items-center lg:gap-[77px] md:gap-[35px] sm:gap-[40px] gap-[22px]">
                <label className="text-zinc-900 text-xs lg:text-base md:font-medium">
                  Add Arrears:
                </label>
                <input
                  name="addArrears"
                  checked={formData.addArrears}
                  onChange={handleChange}
                  className="w-5 h-5 border rounded focus:outline-none focus:border-blue-500"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="border border-customBlue bg-[#DEEBF4] mt-10 mb-3 p-3">
              <p className="text-zinc-900 text-xs lg:text-base md:font-medium">
                Ready for Processing......
              </p>
            </div>
            <input
              name="emptyInput"
              value={formData.emptyInput}
              onChange={handleChange}
              className="w-full lg:px-3 px-1 md:p-1 border rounded border-customBlue focus:bg-gray-200 focus:outline-none focus:border-blue-500"
              type="text"
            />
            <div className={
                isOpen
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"
              }
              >
             <div className="sm:col-span-1 col-span-2 flex items-center mt-5">
              <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                Delete Reason:
              </label>
              <input
                name="deleteReason"
                value={formData.deleteReason}
                onChange={handleChange}
                className={inputStyle("deleteReason")}
                type="text"
              />
             </div>
            </div>
            {renderErrorMessages()}
            <div className="mt-5 flex flex-wrap justify-between gap-2">
              <div className="flex justify-start">
                <button className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg border border-customBlue rounded bg-white font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                  Delete Fee
                </button>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg border border-customBlue rounded bg-white font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5"
                >
                  Create Fee
                </button>
                <button className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg border border-customBlue rounded bg-white font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                  Exit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFeeSingleStudent;

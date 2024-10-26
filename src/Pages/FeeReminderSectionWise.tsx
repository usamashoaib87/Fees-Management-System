import React, { useState } from "react";
import "../App.css";
import Navbar from "../Components/Navbar";

interface AllProps {
  onLogout: () => void;
  isOpen: boolean;
}

interface FormData {
  feeFrom: string;
  feeTo: string;
  className: string;
  section: string;
}

interface FormErrors {
  feeFrom: boolean;
  feeTo: boolean;
  className: boolean;
  section: boolean;
}

const FeeReminderSectionWise: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const [formData, setFormData] = useState<FormData>({
    feeFrom: "",
    feeTo: "",
    className: "",
    section: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    feeFrom: false,
    feeTo: false,
    className: false,
    section: false,
  });

  const [dateError, setDateError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
    setDateError("");
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      feeFrom: !formData.feeFrom,
      feeTo: !formData.feeTo,
      className: !formData.className,
      section: !formData.section,
    };
    setFormErrors(errors);

    if (formData.feeFrom && formData.feeTo) {
      const fromDate = new Date(formData.feeFrom);
      const toDate = new Date(formData.feeTo);
      if (fromDate >= toDate) {
        setDateError("Fee To date must be greater than Fee From date");
        return false;
      }
    }

    return !Object.values(errors).some(Boolean);
  };

  const handleView = () => {
    if (validateForm()) {
      console.log("Form Data", formData);
      
      setFormData({
        feeFrom: "",
        feeTo: "",
        className: "",
        section: "",
      });
      setFormErrors({
        feeFrom: false,
        feeTo: false,
        className: false,
        section: false,
      });
      setDateError("");
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  const className = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
  ];

  const section = [
    { id: "A", name: "A" },
    { id: "B", name: "B" },
  ];

  const inputStyle = (fieldName: keyof FormErrors) => `
    flex-grow lg:px-3 px-1 md:p-1 border 
    ${formErrors[fieldName] ? 'border-red-500' : 'border-customBlue'}
    focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4
  `;

  const renderErrorMessages = () => {
    const errorMessages = [];
    if (formErrors.feeFrom) errorMessages.push("Fee From is Required");
    if (formErrors.feeTo) errorMessages.push("Fee To is Required");
    if (formErrors.className) errorMessages.push("Class is Required");
    if (formErrors.section) errorMessages.push("Section is Required");
    
    return errorMessages.map((message, index) => (
      <div key={index} className="text-red-500 text-sm mt-1">{message}</div>
    ));
  };

  return (
    <div className="m-auto">
      <Navbar title="Fee Reminder (Sectionwise)" onLogout={onLogout} />
      <div className="p-5">
        <div className="border border-customBlue rounded bg-[#EAF1F6] xl:max-w-[90%] m-auto p-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="border border-customBlue bg-[#DEEBF4] rounded p-5">
              <div  className={
                  isOpen
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 transition-all duration-300"
                }>
                <div className="col-span-1 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Fee From:
                  </label>
                  <input
                    name="feeFrom"
                    value={formData.feeFrom}
                    onChange={handleChange}
                    className={inputStyle('feeFrom')}
                    type="date"
                  />
                </div>
                <div className="col-span-1 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Fee To:
                  </label>
                  <input
                    name="feeTo"
                    value={formData.feeTo}
                    onChange={handleChange}
                    className={inputStyle('feeTo')}
                    type="date"
                  />
                </div>
                <div className="col-span-1 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Class:
                  </label>
                  <select
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    className={inputStyle('className')}
                  >
                    <option value="">Select Class</option>
                    {className.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-1 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Section:
                  </label>
                  <select
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                    className={inputStyle('section')}
                  >
                    <option value="">Select Section</option>
                    {section.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {dateError && (
                <div className="text-red-500 mt-2">{dateError}</div>
              )}
              {renderErrorMessages()}
              <div className="flex justify-end gap-3 mt-5">
                <button
                  type="button"
                  onClick={handleView}
                  className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5"
                >
                  View
                </button>
                <button className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                  Exit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeeReminderSectionWise;
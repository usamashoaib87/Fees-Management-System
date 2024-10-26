import React, { useState } from "react";
import "../App.css";
import Navbar from "../Components/Navbar";

interface AllProps {
  onLogout: () => void;
  isOpen: boolean;
}

interface FormData {
  className: string;
  section: string;
  promoteClass: string;
  promoteSection: string;
}

interface FormErrors {
  className: boolean;
  section: boolean;
  promoteClass: boolean;
  promoteSection: boolean;
}

const PromoteStudent: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const [formData, setFormData] = useState<FormData>({
    className: "",
    section: "",
    promoteClass: "",
    promoteSection: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    className: false,
    section: false,
    promoteClass: false,
    promoteSection: false,
  });

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
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      className: !formData.className,
      section: !formData.section,
      promoteClass: !formData.promoteClass,
      promoteSection: !formData.promoteSection,
    };
    setFormErrors(errors);

    return !Object.values(errors).some(Boolean);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Data", formData);

      setFormData({
        className: "",
        section: "",
        promoteClass: "",
        promoteSection: "",
      });
      setFormErrors({
        className: false,
        section: false,
        promoteClass: false,
        promoteSection: false,
      });
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  const className = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
  ];

  const promoteClass = [
    { id: "3", name: "3" },
    { id: "4", name: "4" },
  ];

  const section = [
    { id: "C", name: "C" },
    { id: "D", name: "D" },
  ];

  const promoteSection = [
    { id: "A", name: "A" },
    { id: "B", name: "B" },
  ];

  const tableRows = Array(5).fill(null);

  const inputStyle = (fieldName: keyof FormErrors) => `
    flex-grow lg:px-3 px-1 md:p-1 border 
    ${formErrors[fieldName] ? "border-red-500" : "border-customBlue"}
    focus:bg-gray-200 rounded focus:outline-none active:border-blue-500 w-3/4
  `;

  const renderErrorMessages = () => {
    const errorMessages = [];
    if (formErrors.className) errorMessages.push("Class is Required");
    if (formErrors.section) errorMessages.push("Section is Required");
    if (formErrors.promoteClass)
      errorMessages.push("Promote Class is Required");
    if (formErrors.promoteSection)
      errorMessages.push("Promote Section is Required");

    return errorMessages.map((message, index) => (
      <div key={index} className="text-red-500 text-sm mt-1">
        {message}
      </div>
    ));
  };

  return (
    <div className="m-auto">
      <Navbar title="Promote Student" onLogout={onLogout} />
      <div className="p-5">
        <div className="border border-customBlue rounded bg-[#EAF1F6] xl:max-w-[90%] m-auto p-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="border border-customBlue bg-[#DEEBF4] rounded p-5">
              <h2 className="text-base sm:text-sm md:text-base lg:text-lg text-zinc-900 font-medium md:font-bold mb-3 flex justify-center">
                Student Detail
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
                    Class:
                  </label>
                  <select
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    className={inputStyle("className")}
                  >
                    <option value="">Select Class</option>
                    {className.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1 col-span-2 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Section:
                  </label>
                  <select
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                    className={inputStyle("section")}
                  >
                    <option value="">Select Section</option>
                    {section.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1 col-span-2 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Prom. Class:
                  </label>
                  <select
                    name="promoteClass"
                    value={formData.promoteClass}
                    onChange={handleChange}
                    className={inputStyle("promoteClass")}
                  >
                    <option value="">Select Class</option>
                    {promoteClass.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1 col-span-2 flex items-center">
                  <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[30%] lg:w-[32%] md:w-[25%] sm:w-[39%] w-[33%]">
                    Prom. Sec:
                  </label>
                  <select
                    name="promoteSection"
                    value={formData.promoteSection}
                    onChange={handleChange}
                    className={inputStyle("promoteSection")}
                  >
                    <option value="">Select Section</option>
                    {promoteSection.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {renderErrorMessages()}
              <div className="flex justify-end mt-5 gap-3">
                <button className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                  Select All
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5"
                >
                  Update
                </button>
                <button className="px-1 py-1 w-[100px] text-sm md:text-base lg:text-lg bg-white border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-black hover:text-white active:shadow-inner transform active:translate-y-0.5">
                  Exit
                </button>
              </div>
            </div>
          </form>
          <div className="overflow-x-auto overflow-hidden mt-5">
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
                    Father Name
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Promotion
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
                    <td className="border border-gray-300 p-1 text-center w-[20%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[12%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[25%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[25%]"></td>
                    <td className="border border-gray-300 p-1 text-center w-[13%]">
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

export default PromoteStudent;

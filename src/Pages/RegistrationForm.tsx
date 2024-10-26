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
interface FormErrors {
  studentId: string;
  stdName: string;
  fatherName: string;
  motherName: string;
  address: string;
  phoneNo: string;
  rollNo: string;
  oldRegNo: string;
  className: string;
  section: string;
  gender: string;
  religion: string;
  dob: string;
  admDate: string;
  boardRollno: string;
  fatherCnic: string;
  bloodGroup: string;
  bFormNo: string;
  company: string;
  companyAddress: string;
  designation: string;
  profession: string;
  department: string;
  fatherPhoneNo: string;
  fatherMobileNo: string;
  monthlyInc: string;
}
const RegistrationForm: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    studentId: "",
    stdName: "",
    fatherName: "",
    motherName: "",
    address: "",
    phoneNo: "",
    rollNo: "",
    oldRegNo: "",
    className: "",
    section: "",
    gender: "",
    religion: "",
    dob: "",
    admDate: "",
    fatherCnic: "",
    boardRollno: "",
    bloodGroup: "",
    bFormNo: "",
    concessionType: "",
    concessionRate: "",
    company: "",
    companyAddress: "",
    designation: "",
    profession: "",
    department: "",
    fatherPhoneNo: "",
    fatherMobileNo: "",
    monthlyInc: "",
    concession: "",
    picture: null as File | null,
  });
  const initialFormState = {
    studentId: "",
    stdName: "",
    fatherName: "",
    motherName: "",
    address: "",
    phoneNo: "",
    rollNo: "",
    oldRegNo: "",
    className: "",
    section: "",
    gender: "",
    religion: "",
    dob: "",
    admDate: "",
    fatherCnic: "",
    boardRollno: "",
    bloodGroup: "",
    bFormNo: "",
    concessionType: "",
    concessionRate: "",
    company: "",
    companyAddress: "",
    designation: "",
    profession: "",
    department: "",
    fatherPhoneNo: "",
    fatherMobileNo: "",
    monthlyInc: "",
    concession: "",
    picture: null as File | null,
  };
  const [formErrors, setFormErrors] = useState<FormErrors>({
    studentId: "",
    stdName: "",
    fatherName: "",
    motherName: "",
    address: "",
    phoneNo: "",
    rollNo: "",
    oldRegNo: "",
    className: "",
    section: "",
    gender: "",
    religion: "",
    dob: "",
    admDate: "",
    boardRollno: "",
    fatherCnic: "",
    bloodGroup: "",
    bFormNo: "",
    company: "",
    companyAddress: "",
    designation: "",
    profession: "",
    department: "",
    fatherPhoneNo: "",
    fatherMobileNo: "",
    monthlyInc: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0] || null;
      setFormData((prevState) => ({
        ...prevState,
        [name]: file,
      }));
      if (file) {
        setImageFile(file);
        setSelectedImage(URL.createObjectURL(file));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    validateField(name, value);
  };
  const validateField = (name: string, value: string) => {
    let error = "";
    const numberRegex = /^\d+$/;
    const alphabetRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^(\+92|0)?[3456789]\d{9}$/;
    const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
    const bloodGroupRegex = /^(A|B|AB|O)[+-]$/;

    switch (name) {
      case "studentId":
      case "rollNo":
      case "oldRegNo":
      case "boardRollno":
      case "monthlyInc":
        if (!numberRegex.test(value)) {
          error = "Only numbers are allowed";
        }
        break;
      case "stdName":
      case "fatherName":
      case "motherName":
      case "company":
      case "designation":
      case "department":
        if (!alphabetRegex.test(value)) {
          error = "Only alphabets are allowed";
        }
        break;
      case "phoneNo":
      case "fatherPhoneNo":
      case "fatherMobileNo":
        if (!phoneRegex.test(value)) {
          error = "Invalid Pakistani phone number format";
        }
        break;
      case "fatherCnic":
      case "bFormNo":
        if (!cnicRegex.test(value)) {
          error = "Invalid format (e.g., 12345-1234567-1)";
        }
        break;
      case "bloodGroup":
        if (!bloodGroupRegex.test(value)) {
          error = "Invalid blood group format (e.g., A+, B-, AB+, O-)";
        }
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };
  const handleSave = () => {
    const hasErrors = Object.values(formErrors).some((error) => error !== "");
    if (!hasErrors) {
      console.log("Form Data:", formData);
      console.log(imageFile);
      setFormData(initialFormState);
      setSelectedImage(null);
      setImageFile(null);
    } else {
      console.log("Form has errors, please correct them");
      alert("Please correct the errors in the form before saving.");
    }
  };

  const inputStyle = (fieldName: keyof FormErrors) => `
    flex-grow border lg:p-1 lg:px-3 px-1 border rounded focus:outline-none focus:bg-gray-200 active:border-blue-500 w-3/4
    ${formErrors[fieldName] ? "border-red-500" : "border-customBlue"}
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

  const className = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
  ];
  const section = [
    { id: "A", name: "A" },
    { id: "B", name: "B" },
  ];
  const gender = [
    { id: "Male", name: "Male" },
    { id: "Female", name: "Female" },
  ];
  const religion = [
    { id: "Islam", name: "Islam" },
    { id: "Hinduism", name: "Hinduism" },
  ];
  const profession = [
    { id: "Teacher", name: "Teacher" },
    { id: "BusinessMan", name: "BusinessMan" },
  ];

  const handleViewPicture = () => {
    if (!selectedImage) {
      alert("Please Select a Picture");
      return;
    }
    window.open(selectedImage, "_blank");
  };

  return (
    <div className="m-auto">
      <Navbar title="Registration Form" onLogout={onLogout} />
      <form className="p-5">
        <div className="border border-customBlue rounded bg-[#EAF1F6] xl:max-w-[90%] m-auto p-6 pt-2">
          <div className="m-auto">
            <div className="flex flex-wrap sm:gap-1 justify-center">
              <button className="flex flex-col items-center w-[60px] 2xl:w-[70px] m-1 py-1 bg-white text-sm rounded font-medium shadow-lg hover:bg-blue-800 active:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border group ">
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
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[60%] p-2">
              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-4 ">
                <div className={
                    isOpen
                      ? "grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-300"
                      : "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-300"
                  }>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Std ID:
                    </label>
                    <input
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      className={inputStyle("studentId")}
                      type="text"
                      placeholder="e.g 453212"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Std Name:
                    </label>
                    <input
                      name="stdName"
                      value={formData.stdName}
                      onChange={handleChange}
                      className={inputStyle("stdName")}
                      type="text"
                      placeholder="e.g M Ali"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-4">
                <h2 className="text-base lg:text-lg md:font-bold text-zinc-900 font-medium mb-3 flex justify-center">
                  Detail
                </h2>
                <div
                  className={
                    isOpen
                      ? "grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-300"
                      : "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 transition-all duration-300"
                  }
                >
                  <div className="col-span-2 sm:col-span-1 lg:col-span-2 2xl:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[39%] w-[33%]">
                      F Name:
                    </label>
                    <input
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className={inputStyle("fatherName")}
                      type="text"
                      placeholder="e.g Syed Hassan"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 lg:col-span-2 2xl:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[39%] w-[33%]">
                      M Name:
                    </label>
                    <input
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      className={inputStyle("motherName")}
                      type="text"
                      placeholder="e.g Ayesha"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 lg:col-span-2 2xl:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Address:
                    </label>
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={inputStyle("address")}
                      type="text"
                      placeholder="e.g House # 123, Street, City"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 lg:col-span-2 2xl:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Ph No:
                    </label>
                    <input
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      className={inputStyle("phoneNo")}
                      type="text"
                      placeholder="e.g 03123456789"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Roll No:
                    </label>
                    <input
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleChange}
                      className={inputStyle("rollNo")}
                      type="text"
                      placeholder="e.g 12"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Old RegNo:
                    </label>
                    <input
                      name="oldRegNo"
                      value={formData.oldRegNo}
                      onChange={handleChange}
                      className={inputStyle("oldRegNo")}
                      type="text"
                      placeholder="e.g 12345"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Cla. Name:
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
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
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
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Gender:
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={inputStyle("gender")}
                    >
                      <option value="">Select Gender</option>
                      {gender.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Religion:
                    </label>
                    <select
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                      className={inputStyle("religion")}
                    >
                      <option value="">Select Religion</option>
                      {religion.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      DOB:
                    </label>
                    <input
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className={inputStyle("dob")}
                      type="date"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Adm. Date:
                    </label>
                    <input
                      name="admDate"
                      value={formData.admDate}
                      onChange={handleChange}
                      className={inputStyle("admDate")}
                      type="date"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      F CNIC:
                    </label>
                    <input
                      name="fatherCnic"
                      value={formData.fatherCnic}
                      onChange={handleChange}
                      className={inputStyle("fatherCnic")}
                      type="text"
                      placeholder="e.g 35001-2345678-9"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      B Rollno:
                    </label>
                    <input
                      name="boardRollno"
                      value={formData.boardRollno}
                      onChange={handleChange}
                      className={inputStyle("boardRollno")}
                      type="text"
                      placeholder="e.g 12345"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1  flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      B Group:
                    </label>
                    <input
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className={inputStyle("bloodGroup")}
                      type="text"
                      placeholder="e.g AB+"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1  flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      B Form no:
                    </label>
                    <input
                      name="bFormNo"
                      value={formData.bFormNo}
                      onChange={handleChange}
                      className={inputStyle("bFormNo")}
                      type="text"
                      placeholder="e.g 36101-2345678-9"
                    />
                  </div>
                </div>
              </div>

              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4">
                <h2 className="text-sm md:text-base lg:text-lg font-medium md:font-bold text-zinc-900 mb-3 flex justify-center">
                  Concession Detail
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="col-span-2 flex items-center">
                    <input
                      className="mr-4 lg:scale-150 border border-customBlue"
                      type="radio"
                      name="concession"
                      value="amount"
                      checked={formData.concession === "amount"}
                      onChange={handleChange}
                    />
                    <label className="text-zinc-900 text-xs sm:text-sm md:text-base md:font-medium lg:text-medium mr-4">
                      Amount
                    </label>
                    <input
                      type="radio"
                      className="lg:scale-150 border border-customBlue"
                      name="concession"
                      value="percent"
                      checked={formData.concession === "percent"}
                      onChange={handleChange}
                    />
                    <label className="text-zinc-900 text-xs sm:text-sm md:text-base md:font-medium lg:text-medium ml-4">
                      Percent
                    </label>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Con. Type:
                    </label>
                    <input
                      name="concessionType"
                      value={formData.concessionType}
                      onChange={handleChange}
                      className="flex-grow lg:p-1 lg:px-3 px-1 border border-customBlue rounded focus:outline-none focus:bg-gray-200 active:border-blue-500 w-3/4"
                      type="text"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Con. Rate:
                    </label>
                    <input
                      name="concessionRate"
                      value={formData.concessionRate}
                      onChange={handleChange}
                      className="flex-grow lg:p-1 lg:px-3 px-1 border border-customBlue rounded focus:outline-none focus:bg-gray-200 active:border-blue-500 w-3/4"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] p-2">
              <div className="flex justify-center p-2">
                <div className="w-80 h-60 bg-white mb-2 flex justify-center items-center border border-customBlue rounded">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <p className="text-blue-400 text-xs sm:text-sm md:text-base lg:text-base">
                      Select Your Picture
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleViewPicture}
                  className="px-1 py-1 lg:w-[120px] md:w-[110px] w-[100px] bg-white text-sm md:text-base lg:text-lg border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border border-white-200"
                >
                  View
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById("fileInput")?.click()}
                  className="px-1 py-1 lg:w-[120px] md:w-[110px] w-[100px] bg-white text-sm md:text-base lg:text-lg border border-customBlue rounded font-medium shadow-md hover:bg-blue-800 text-zinc-900 hover:text-white active:shadow-inner transform active:translate-y-0.5 border border-white-200"
                >
                  Select Picture
                </button>
                <input
                  id="fileInput"
                  type="file"
                  name="picture"
                  accept="image/*"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </div>

              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mt-3">
                <h2 className="text-sm md:text-base lg:text-lg font-medium md:font-bold text-zinc-900 mb-3 flex justify-center">
                  Father Record
                </h2>
                <div className={ isOpen ? "grid lg:grid-cols-1 sm:grid-cols-2 gap-3  transition-all duration-300" : "grid 2xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 gap-3  transition-all duration-300"}>
                  <div className="flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Company:
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputStyle("company")}
                      type="text"
                      placeholder="e.g. ABC Company"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Address:
                    </label>
                    <input
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleChange}
                      className={inputStyle("companyAddress")}
                      type="text"
                      placeholder="e.g House # 123, Street, City"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Designation:
                    </label>
                    <input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className={inputStyle("designation")}
                      type="text"
                      placeholder="e.g. Manager"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Profession:
                    </label>
                    <select
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className={inputStyle("profession")}
                    >
                      <option value="">Select Profession</option>
                      {profession.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Department:
                    </label>
                    <input
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className={inputStyle("department")}
                      type="text"
                      placeholder="e.g. HR Department"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Phone No:
                    </label>
                    <input
                      name="fatherPhoneNo"
                      value={formData.fatherPhoneNo}
                      onChange={handleChange}
                      className={inputStyle("fatherPhoneNo")}
                      type="text"
                      placeholder="e.g. 03004165758"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Mobile No:
                    </label>
                    <input
                      name="fatherMobileNo"
                      value={formData.fatherMobileNo}
                      onChange={handleChange}
                      className={inputStyle("fatherMobileNo")}
                      type="text"
                      placeholder="e.g. 03078811568"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium 2xl:w-[50%] lg:w-[40%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Monthly Inc:
                    </label>
                    <input
                      name="monthlyInc"
                      value={formData.monthlyInc}
                      onChange={handleChange}
                      className={inputStyle("monthlyInc")}
                      type="text"
                      placeholder="e.g. 250000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {renderErrorMessages()}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

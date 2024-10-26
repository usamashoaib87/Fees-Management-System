import React, { useState } from "react";
import "../App.css";
import Navbar from "../Components/Navbar";

interface AllProps {
  onLogout: () => void;
  isOpen: boolean;
}

interface FormData {
  period: string;
  billNo: string;
  feeFrom: string;
  feeTo: string;
  vDate: string;
  validDate: string;
  stdId: string;
  dueDate: string;
  stdName: string;
  fatherName: string;
  className: string;
  rollNo: string;
  schAdmission: string;
  tutionFee: string;
  examFee: string;
  nBookFee: string;
  sumVacation: string;
  prospectus: string;
  absentFine: string;
  annualFund: string;
  lateFine: string;
  certificateFee: string;
  others: string;
  boardAdmission: string;
  boardRegistration: string;
  arrears: string;
  tutionFees: string;
  totalFee: string;
  concession: string;
  netValue: string;
}

interface FormErrors {
  [key: string]: boolean;
}

const FeeAmmendments: React.FC<AllProps> = ({ onLogout, isOpen = false }) => {
  const [formData, setFormData] = useState<FormData>({
    period: "",
    billNo: "",
    feeFrom: "",
    feeTo: "",
    vDate: "",
    validDate: "",
    stdId: "",
    dueDate: "",
    stdName: "",
    fatherName: "",
    className: "",
    rollNo: "",
    schAdmission: "",
    tutionFee: "",
    examFee: "",
    nBookFee: "",
    sumVacation: "",
    prospectus: "",
    absentFine: "",
    annualFund: "",
    lateFine: "",
    certificateFee: "",
    others: "",
    boardAdmission: "",
    boardRegistration: "",
    arrears: "",
    tutionFees: "",
    totalFee: "",
    concession: "",
    netValue: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [dateError, setDateError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "stdName" || name === "fatherName") {
      newValue = value.replace(/[^a-zA-Z.\s]/g, "");
    }

    const numericFields = [
      "tutionFee",
      "billNo",
      "stdId",
      "rollNo",
      "examFee",
      "nBookFee",
      "sumVacation",
      "prospectus",
      "absentFine",
      "annualFund",
      "lateFine",
      "certificateFee",
      "others",
      "boardAdmission",
      "boardRegistration",
      "arrears",
      "totalFee",
      "concession",
      "netValue",
      "tutionFees",
    ];
    if (numericFields.includes(name)) {
      newValue = value.replace(/[^0-9,\-+.]/g, "");
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
    setDateError("");
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        errors[key] = true;
        isValid = false;
      }
    });

    setFormErrors(errors);

    if (formData.feeFrom && formData.feeTo) {
      const fromDate = new Date(formData.feeFrom);
      const toDate = new Date(formData.feeTo);
      if (fromDate >= toDate) {
        setDateError("Fee To date must be greater than Fee From date");
        isValid = false;
      }
    }

    if (formData.vDate && formData.validDate) {
      const voucherDate = new Date(formData.vDate);
      const validDate = new Date(formData.validDate);
      if (validDate <= voucherDate) {
        setDateError((prevError) =>
          prevError
            ? `${prevError}. Valid Date must be greater than Voucher Date`
            : "Valid Date must be greater than Voucher Date"
        );
        isValid = false;
      }
    }

    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Form Data", formData);
      setFormData({
        period: "",
        billNo: "",
        feeFrom: "",
        feeTo: "",
        vDate: "",
        validDate: "",
        stdId: "",
        dueDate: "",
        stdName: "",
        fatherName: "",
        className: "",
        rollNo: "",
        schAdmission: "",
        tutionFee: "",
        examFee: "",
        nBookFee: "",
        sumVacation: "",
        prospectus: "",
        absentFine: "",
        annualFund: "",
        lateFine: "",
        certificateFee: "",
        others: "",
        boardAdmission: "",
        boardRegistration: "",
        arrears: "",
        tutionFees: "",
        totalFee: "",
        concession: "",
        netValue: "",
      });
      setFormErrors({});
      setDateError("");
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  const period = [
    { id: "1 month", name: "1 month" },
    { id: "2 month", name: "2 month" },
  ];
  const className = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
  ];

  const inputStyle = (fieldName: string) => `
    flex-grow lg:px-3 px-1 md:p-1 border 
    ${formErrors[fieldName] ? "border-red-500" : "border-customBlue"}
    focus:bg-gray-200 rounded focus:outline-none active:border-blue-500
  `;

  const renderErrorMessages = () => {
    const errorMessages = Object.entries(formErrors)
      .filter(([, hasError]) => hasError)
      .map(
        ([fieldName]) =>
          `${
            fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
          } is Required`
      );

    return errorMessages.map((message, index) => (
      <div key={index} className="text-red-500 text-sm mt-1">
        {message}
      </div>
    ));
  };
  return (
    <div className="m-auto">
      <Navbar title="Fee Ammendments" onLogout={onLogout} />
      <form className="p-5" onSubmit={(e) => e.preventDefault()}>
        <div className="border border-customBlue rounded bg-[#EAF1F6] xl:max-w-[90%] m-auto p-6">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-[70%] p-2">
              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-4">
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
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[34%] w-[30.5%]">
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
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Bill No:
                    </label>
                    <input
                      name="billNo"
                      value={formData.billNo}
                      onChange={handleChange}
                      className={`${inputStyle("billNo")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[34%] w-[30.5%]">
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
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[34%] w-[30.5%]">
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
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[34%] w-[30.5%]">
                      Vouc. Date:
                    </label>
                    <input
                      name="vDate"
                      value={formData.vDate}
                      onChange={handleChange}
                      className={inputStyle("vDate")}
                      type="date"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[34%] w-[30.5%]">
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
                </div>
              </div>
              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-4">
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
                      Student ID:
                    </label>
                    <input
                      name="stdId"
                      value={formData.stdId}
                      onChange={handleChange}
                      className={`${inputStyle("stdId")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Due Date:
                    </label>
                    <input
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                      className={`${inputStyle("dueDate")} w-3/4`}
                      type="date"
                    />
                  </div>
                  <div className="xl:col-span-1 lg:col-span-2 col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[18%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Std Name:
                    </label>
                    <input
                      name="stdName"
                      value={formData.stdName}
                      onChange={handleChange}
                      className={`${inputStyle("stdName")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="xl:col-span-1 lg:col-span-2 col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[18%] md:w-[25%] sm:w-[39%] w-[33%]">
                      F. Name:
                    </label>
                    <input
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className={`${inputStyle("fatherName")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[35%] lg:w-[37%] md:w-[25%] sm:w-[34%] w-[30%]">
                      Std Class:
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
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Roll No:
                    </label>
                    <input
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleChange}
                      className={`${inputStyle("rollNo")} w-3/4`}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-4">
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
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Sch Adm:
                    </label>
                    <input
                      name="schAdmission"
                      value={formData.schAdmission}
                      onChange={handleChange}
                      className={`${inputStyle("schAdmission")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Tution Fee:
                    </label>
                    <input
                      name="tutionFee"
                      value={formData.tutionFee}
                      onChange={handleChange}
                      className={`${inputStyle("tutionFee")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Exam Fee:
                    </label>
                    <input
                      name="examFee"
                      value={formData.examFee}
                      onChange={handleChange}
                      className={`${inputStyle("examFee")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      N.Book Fee:
                    </label>
                    <input
                      name="nBookFee"
                      value={formData.nBookFee}
                      onChange={handleChange}
                      className={`${inputStyle("nBookFee")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      S. Vacation:
                    </label>
                    <input
                      name="sumVacation"
                      value={formData.sumVacation}
                      onChange={handleChange}
                      className={`${inputStyle("sumVacation")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Prospectus:
                    </label>
                    <input
                      name="prospectus"
                      value={formData.prospectus}
                      onChange={handleChange}
                      className={`${inputStyle("prospectus")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Abs. Fine:
                    </label>
                    <input
                      name="absentFine"
                      value={formData.absentFine}
                      onChange={handleChange}
                      className={`${inputStyle("absentFine")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Ann. Fund:
                    </label>
                    <input
                      name="annualFund"
                      value={formData.annualFund}
                      onChange={handleChange}
                      className={`${inputStyle("annualFund")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Late Fine:
                    </label>
                    <input
                      name="lateFine"
                      value={formData.lateFine}
                      onChange={handleChange}
                      className={`${inputStyle("lateFine")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Cert. Fee:
                    </label>
                    <input
                      name="certificateFee"
                      value={formData.certificateFee}
                      onChange={handleChange}
                      className={`${inputStyle("certificateFee")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Others:
                    </label>
                    <input
                      name="others"
                      value={formData.others}
                      onChange={handleChange}
                      className={`${inputStyle("others")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Board Adm:
                    </label>
                    <input
                      name="boardAdmission"
                      value={formData.boardAdmission}
                      onChange={handleChange}
                      className={`${inputStyle("boardAdmission")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Board Reg:
                    </label>
                    <input
                      name="boardRegistration"
                      value={formData.boardRegistration}
                      onChange={handleChange}
                      className={`${inputStyle("boardRegistration")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium xl:w-[41%] lg:w-[45%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Arrears:
                    </label>
                    <input
                      name="arrears"
                      value={formData.arrears}
                      onChange={handleChange}
                      className={`${inputStyle("arrears")} w-3/4`}
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[30%] p-2 flex flex-col justify-between">
              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-4">
                <h2 className="text-base sm:text-sm md:text-base lg:text-lg text-zinc-900 font-medium md:font-bold mb-3 flex justify-center">
                  Fee Concession
                </h2>
                <div
                  className={
                    isOpen
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 transition-all duration-300 gap-3"
                      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 transition-all duration-300 gap-3"
                  }
                >
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium lg:w-[35%] md:w-[25%] sm:w-[38%] w-[33%]">
                      Tu. Fee:
                    </label>
                    <input
                      name="tutionFees"
                      value={formData.tutionFees}
                      onChange={handleChange}
                      className={`${inputStyle("tutionFees")} w-3/4`}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-customBlue bg-[#DEEBF4] rounded p-4 mb-4">
                <div
                  className={
                    isOpen
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 transition-all duration-300 gap-3"
                      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 transition-all duration-300 gap-3"
                  }
                >
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium lg:w-[35%] md:w-[25%] sm:w-[39%] w-[33%]">
                      T Fee:
                    </label>
                    <input
                      name="totalFee"
                      value={formData.totalFee}
                      onChange={handleChange}
                      className={`${inputStyle("totalFee")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium lg:w-[35%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Conc:
                    </label>
                    <input
                      name="concession"
                      value={formData.concession}
                      onChange={handleChange}
                      className={`${inputStyle("concession")} w-3/4`}
                      type="text"
                    />
                  </div>
                  <div className="col-span-1 flex items-center">
                    <label className="text-zinc-900 text-xs lg:text-base md:font-medium lg:w-[35%] md:w-[25%] sm:w-[39%] w-[33%]">
                      Net Val:
                    </label>
                    <input
                      name="netValue"
                      value={formData.netValue}
                      onChange={handleChange}
                      className={`${inputStyle("netValue")} w-3/4`}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3">
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
          </div>
          {dateError && <div className="text-red-500 mt-2">{dateError}</div>}
          {renderErrorMessages()}
        </div>
      </form>
    </div>
  );
};

export default FeeAmmendments;

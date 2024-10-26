import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import MenuButton from "./MenuButton";

interface SidebarProps {
  isOpen: boolean;
  onToggle: (linkName?: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [activeLink, setActiveLink] = useState<string | null>('Dashboard');

  const handleClick = (linkName: string) => {
    setActiveLink(linkName);
    onToggle(linkName);
  };

  return (
    <>
      <div
        className={`transition-transform duration-300 ease-in-out fixed inset-0 ${
          isOpen ? "opacity-0" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => onToggle()}
      ></div>
      <button
        id="toggleButton"
        onClick={() => onToggle()}
        className={`transition-margin-left duration-300 ease-in-out fixed 2xl:top-3.5 md:top-2 top-3 z-50 p-3 rounded-full flex items-center justify-center lg:w-10 lg:h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 w-8 h-8 ${
          isOpen
            ? "bg-white 2xl:left-[22rem] lg:left-[15.8rem] sm:left-[14.5rem] left-[11.7rem] translate-x-0"
            : "bg-blue-900 lg:left-12"
        }`}
      >
        <div className="space-y-1">
          {isOpen ? (
            <div className="relative flex items-center justify-center ">
              <span className="absolute bg-black transform rotate-45 w-3 h-0.5 sm:w-3 sm:h-0.5 md:w-4 md:h-0.5 lg:w-4 lg:h-0.5"></span>
              <span className="absolute bg-black transform -rotate-45 w-3 h-0.5 sm:w-3 sm:h-0.5 md:w-4 md:h-0.5 lg:w-4 lg:h-0.5"></span>
            </div>
          ) : (
            <>
              <MenuButton />
            </>
          )}
        </div>
      </button>
      <div
        ref={sidebarRef}
        id="sidebar"
        className={`fixed z-50 top-0 left-0 h-full 2xl:w-[350px] lg:w-[250px] sm:w-[230px] w-[185px] bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <h2 className="p-3 2xl:p-4 bg-blue-800 text-white text-lg lg:text-xl 2xl:text-2xl font-medium sticky top-0 z-50">
          Menu
        </h2>
        <div className="p-2 overflow-y-auto h-full overflow-hidden">
          <Link to="/Dashboard">
            <p
              onClick={() => handleClick("Dashboard")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "Dashboard"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Dashboard
            </p>
          </Link>
          <Link to="RegistrationForm">
            <p
              onClick={() => handleClick("RegistrationForm")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "RegistrationForm"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Registration Form
            </p>
          </Link>
          <Link to="FeeStructure">
            <p
              onClick={() => handleClick("FeeStructure")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "FeeStructure"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Structure
            </p>
          </Link>
          <Link to="CreateFeeAll">
            <p
              onClick={() => handleClick("CreateFeeAll")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "CreateFeeAll"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Create Fee All
            </p>
          </Link>
          <Link to="CreateFeeClassWise">
            <p
              onClick={() => handleClick("FeeClassWise")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "FeeClassWise"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Class Wise
            </p>
          </Link>
          <Link to="CreateFeeSingleStudent">
            <p
              onClick={() => handleClick("FeeSingleStudent")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "FeeSingleStudent"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Single Student
            </p>
          </Link>
          <Link to="CreateAnnualCharges">
            <p
              onClick={() => handleClick("CreateAnnualCharges")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "CreateAnnualCharges"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Annual Charges
            </p>
          </Link>
          <Link to="/StudentTransfer">
            <p
              onClick={() => handleClick("StudentTransfer")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "StudentTransfer"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Student Transfer
            </p>
          </Link>
          <Link to="DeactivateStudent">
            <p
              onClick={() => handleClick("DeactivateStudent")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "DeactivateStudent"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Deactivate Student
            </p>
          </Link>
          <Link to="DefineSection">
            <p
              onClick={() => handleClick("DefineSection")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "DefineSection"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Define Section
            </p>
          </Link>
          <Link to="DefineConcessionTypes">
            <p
              onClick={() => handleClick("DefineConcessionTypes")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "DefineConcessionTypes"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Concession Types
            </p>
          </Link>
          <Link to="ReceiveFee">
            <p
              onClick={() => handleClick("ReceiveFee")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "ReceiveFee"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Receive Fee
            </p>
          </Link>
          <Link to="ReceiveAnnualCharges">
            <p
              onClick={() => handleClick("ReceiveAnnualCharges")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "ReceiveAnnualCharges"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
             Annual Charges
            </p>
          </Link>
          <Link to="PromoteStudent">
            <p
              onClick={() => handleClick("PromoteStudent")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "PromoteStudent"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Promote Student
            </p>
          </Link>
          <Link to="FeeAmmendments">
            <p
              onClick={() => handleClick("FeeAmmendments")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "FeeAmmendments"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Ammendments
            </p>
          </Link>
          <Link to="AllFeeChallans">
            <p
              onClick={() => handleClick("AllFeeChallans")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "AllFeeChallans"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              All Fee Challans
            </p>
          </Link>
          <Link to="ClassWiseChallans">
            <p
              onClick={() => handleClick("ClassWiseChallans")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "ClassWiseChallans"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Class Wise 
            </p>
          </Link>
          <Link to="ClassSectionWise">
            <p
              onClick={() => handleClick("ClassSectionWise")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "ClassSectionWise"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Class/Section Wise
            </p>
          </Link>
          <Link to="StudentWiseChallan">
            <p
              onClick={() => handleClick("StudentWiseChallan")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "StudentWiseChallan"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Student Wise
            </p>
          </Link>
          <Link to="DuplicateFeeChallan">
            <p
              onClick={() => handleClick("DuplicateFeeChallan")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "DuplicateFeeChallan"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Duplicate Challan
            </p>
          </Link>
          <Link to="FeeReminderClassWise">
            <p
              onClick={() => handleClick("FeeReminderClassWise")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "FeeReminderClassWise"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Reminder ClassWise
            </p>
          </Link>
          <Link to="FeeReminderSectionWise">
            <p
              onClick={() => handleClick("FeeReminderSectionWise")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "FeeReminderSectionWise"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
             SectionWise
            </p>
          </Link>
          <Link to="CreatedFeeAll">
            <p
              onClick={() => handleClick("CreatedFeeAll")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "CreatedFeeAll"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Created Fee All
            </p>
          </Link>
          <Link to="CreatedFeeSummary">
            <p
              onClick={() => handleClick("CreatedFeeSummary")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "CreatedFeeSummary"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Summary
            </p>
          </Link>
          <Link to="CreatedFeeClassWise">
            <p
              onClick={() => handleClick("CreatedFeeClassWise")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "CreatedFeeClassWise"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee ClassWise
            </p>
          </Link>
          <Link to="CreatedFeeClassSection">
            <p
              onClick={() => handleClick("CreatedFeeClassSection")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "CreatedFeeClassSection"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Class/Section
            </p>
          </Link>
          <Link to="FeeDeletedRecord">
            <p
              onClick={() => handleClick("FeeDeletedRecord")}
              className={`flex justify-start border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "FeeDeletedRecord"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Deleted Record
            </p>
          </Link>
          <Link to="FeeReceivedAll">
            <p
              onClick={() => handleClick("FeeReceivedAll")}
              className={`flex justify-start mb-10 border-b border-[#E0E0E0] w-full rounded hover:bg-blue-800 hover:text-white text-black sm:p-3 p-2 cursor-pointer text-center font-medium text-xs lg:text-base 2xl:text-lg active:shadow-inner transform active:translate-y-0.5 ${
                activeLink === "FeeReceivedAll"
                  ? " text-white bg-blue-800"
                  : "text-black"
              }`}
            >
              Fee Received All
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

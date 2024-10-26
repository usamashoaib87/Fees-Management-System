import React, { useState,useEffect } from "react";
import "../App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import RegistrationForm from "../Pages/RegistrationForm";
import FeeStructure from "../Pages/FeeStructure";
import DefineSection from "../Pages/DefineSection";
import StudentTransfer from "../Pages/StudentTransfer";
import DefineConcessionTypes from "../Pages/DefineConcessionTypes";
import DeactivateStudent from "../Pages/DeactivateStudent";
import CreateFeeAll from "../Pages/CreateFeeAll";
import CreateFeeClassWise from "../Pages/CreateFeeClassWise";
import CreateFeeSingleStudent from "../Pages/CreateFeeSingleStudent";
import CreateAnnualCharges from "../Pages/CreateAnnualCharges";
import ReceiveFee from "../Pages/ReceiveFee";
import ReceiveAnnualCharges from "../Pages/ReceiveAnnualCharges";
import PromoteStudent from "../Pages/PromoteStudent";
import FeeAmmendments from "../Pages/FeeAmmendments";
import AllFeeChallans from "../Pages/AllFeeChallans";
import ClassWiseChallans from "../Pages/ClassWiseChallans";
import ClassSectionWise from "../Pages/ClassSectionWise";
import StudentWiseChallan from "../Pages/StudentWiseChallan";
import DuplicateFeeChallan from "../Pages/DuplicateFeeChallan";
import FeeReminderClassWise from "../Pages/FeeReminderClassWise";
import FeeReminderSectionWise from "../Pages/FeeReminderSectionWise";
import CreatedFeeAll from "../Pages/CreatedFeeAll";
import CreatedFeeSummary from "../Pages/CreatedFeeSummary";
import CreatedFeeClassWise from "../Pages/CreatedFeeClassWise";
import CreatedFeeClassSection from "../Pages/CreatedFeeClassSection";
import FeeDeletedRecord from "../Pages/FeeDeletedRecord";
import FeeReceivedAll from "../Pages/FeeReceivedAll";
import useMediaQuery from '../CustomHooks/useMediaQuery'; 
import Dashboard from "./Dashboard";
interface MainContentProps {
   onLogout: () => void;
 }
 
 const MainContent: React.FC<MainContentProps> = ({ onLogout }) => {
   const isLargeScreen = useMediaQuery('(min-width: 1535px)');
   const [isSidebarOpen, setIsSidebarOpen] = useState(isLargeScreen);
 
   const handleSidebarToggle = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };
 
   useEffect(() => {
     setIsSidebarOpen(isLargeScreen);
   }, [isLargeScreen]);
   return (
     <Router>
       <div>
         <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
        <div
          className={`transition-margin-left duration-300 ease-in-out ${
            isSidebarOpen ? "2xl:ml-[250px]" : "ml-0"
          }`}
        >
          <div>
            <Routes>
              <Route 
                 path="/" 
                 element={<Dashboard onLogout={onLogout}/>} />
              <Route 
                 path="/Dashboard" 
                 element={<Dashboard onLogout={onLogout}/>} />
              <Route 
                 path="/RegistrationForm" 
                 element={<RegistrationForm onLogout={onLogout} isOpen={isSidebarOpen}/>} />
              <Route 
                 path="/FeeStructure" 
                 element={<FeeStructure onLogout={onLogout} isOpen={isSidebarOpen}/>} />
              <Route 
                 path="/DefineSection" 
                 element={<DefineSection onLogout={onLogout} isOpen={isSidebarOpen}/>} />
              <Route 
                 path="/StudentTransfer" 
                 element={<StudentTransfer onLogout={onLogout} isOpen={isSidebarOpen}/>} />
              <Route
                 path="/DefineConcessionTypes"
                 element={<DefineConcessionTypes onLogout={onLogout} isOpen={isSidebarOpen}/>}
              />
              <Route
                 path="/DeactivateStudent"
                 element={<DeactivateStudent onLogout={onLogout} isOpen={isSidebarOpen}/>}
              />
              <Route 
                 path="/CreateFeeAll"
                 element={<CreateFeeAll onLogout={onLogout} isOpen={isSidebarOpen} />} />
              <Route
                path="/CreateFeeClassWise"
                element={<CreateFeeClassWise onLogout={onLogout} isOpen={isSidebarOpen}/>}
              />
              <Route
                 path="/CreateFeeSingleStudent"
                 element={<CreateFeeSingleStudent onLogout={onLogout} isOpen={isSidebarOpen}/>}
              />
              <Route
                 path="/CreateAnnualCharges"
                 element={<CreateAnnualCharges onLogout={onLogout} isOpen={isSidebarOpen}/>}
              />
              <Route 
                 path="/ReceiveFee" 
                 element={<ReceiveFee onLogout={onLogout} isOpen={isSidebarOpen}/>} />
              <Route
                 path="/ReceiveAnnualCharges"
                 element={<ReceiveAnnualCharges onLogout={onLogout} isOpen={isSidebarOpen}/>}
              />
              <Route 
                 path="/PromoteStudent" 
                 element={<PromoteStudent onLogout={onLogout} isOpen={isSidebarOpen}/>} />
              <Route 
                 path="/FeeAmmendments" 
                 element={<FeeAmmendments onLogout={onLogout} isOpen={isSidebarOpen}/>} />
              <Route 
                 path="/AllFeeChallans" 
                 element={<AllFeeChallans onLogout={onLogout}  isOpen={isSidebarOpen}/>} />
              <Route
                 path="/ClassWiseChallans"
                 element={<ClassWiseChallans onLogout={onLogout}  isOpen={isSidebarOpen}/>}
              />
              <Route 
                 path="/ClassSectionWise" 
                 element={<ClassSectionWise onLogout={onLogout}  isOpen={isSidebarOpen}/>} />
              <Route
                 path="/StudentWiseChallan"
                 element={<StudentWiseChallan onLogout={onLogout}  isOpen={isSidebarOpen}/>}
              />
              <Route
                 path="/DuplicateFeeChallan"
                 element={<DuplicateFeeChallan onLogout={onLogout}  isOpen={isSidebarOpen}/>}
              />
              <Route
                 path="/FeeReminderClassWise"
                 element={<FeeReminderClassWise  onLogout={onLogout} isOpen={isSidebarOpen}/>}
              />
              <Route
                 path="/FeeReminderSectionWise"
                 element={<FeeReminderSectionWise onLogout={onLogout}  isOpen={isSidebarOpen}/>}
              />
              <Route 
                 path="/CreatedFeeAll" 
                 element={<CreatedFeeAll  onLogout={onLogout} isOpen={isSidebarOpen}/>}
                 />
              <Route
                 path="/CreatedFeeSummary"
                 element={<CreatedFeeSummary onLogout={onLogout} isOpen={isSidebarOpen} />}
              />
              <Route
                 path="/CreatedFeeClassWise"
                 element={<CreatedFeeClassWise onLogout={onLogout} isOpen={isSidebarOpen} />}
              />
              <Route
                 path="/CreatedFeeClassSection"
                 element={<CreatedFeeClassSection  onLogout={onLogout} isOpen={isSidebarOpen}/>}
              />
              <Route 
                 path="/FeeDeletedRecord" 
                 element={<FeeDeletedRecord  onLogout={onLogout} isOpen={isSidebarOpen}/>} />
              <Route 
                 path="/FeeReceivedAll" 
                 element={<FeeReceivedAll onLogout={onLogout}  isOpen={isSidebarOpen}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainContent;

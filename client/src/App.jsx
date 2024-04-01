import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithdrawalPage from "./WithdrawalPage";
import ApplyLoanPage from "./ApplyLoanPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import LoanStatusPage from "./LoanStatusPage";
import LoanCalculatorPage from "./LoanCalculatorPage";
import SettingsPage from "./SettingsPage";
import LoginSecurityPage from "./LoginSecurityPage";
import NotificationSettingsPage from "./NotificationSettingsPage";
import { useAuthContext } from "./context/authContext";

import AdminWithdrawalPage from "./AdminWithdrawalPage";
import AdminDashboardPage from "./AdminDashboardPage";
import AddSubAdminPage from "./AddSubAdminPage";
import AdminSavingsPage from "./AdminSavingsPage";
import AdminReportPage from "./AdminReportPage";
import RegisteredSubAdminPage from "./RegisteredSubAdminPage";
import RegisteredMembersPage from "./RegisteredMembersPage";
import AdminLoanPage from "./AdminLoanPage";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useAuthContext();
  const path = window.location.pathname;
  if (!user && !(path === "/login" || path === "/register"))
    window.location.href = "/login";

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Router>
        <Routes>
          <Route path="/withdraw" element={<WithdrawalPage />} />
          <Route path="/applyloan" element={<ApplyLoanPage />} />{" "}
          {/* Landing page at root path */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/loanstatus" element={<LoanStatusPage />} />
          <Route path="/calculator" element={<LoanCalculatorPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/loginsecurity" element={<LoginSecurityPage />} />
          <Route
            path="/notificationsettings"
            element={<NotificationSettingsPage />}
          />
          <Route path="/adminwithdraw" element={<AdminWithdrawalPage />} />
          <Route path="/registersubadmin" element={<AdminDashboardPage />} />
          <Route path="/addsubadmin" element={<AddSubAdminPage />} />
          <Route path="/adminsavings" element={<AdminSavingsPage />} />
          <Route path="/adminreport" element={<AdminReportPage />} />
          <Route
            path="/subadminregistration"
            element={<RegisteredSubAdminPage />}
          />
          <Route
            path="/registeredmembers"
            element={<RegisteredMembersPage />}
          />
          <Route path="/adminloan" element={<AdminLoanPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

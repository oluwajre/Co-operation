import React, { useState } from "react";
import "../LoanStatus/LoanStatus.css";
import { LuRefreshCw } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import { useEffect } from "react";
import { useAuthContext } from "../../context/authContext";

const AdminLoan = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2024/01/01")); // Initial state
  const [query, setQuery] = useState("");
  const [loans, setLoans] = useState([]);
  const { user } = useAuthContext();

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const token = user.data.token;

  useEffect(() => {
    const handleFetchWithdraw = async () => {
      const res = await fetch("http://localhost:4000/loan", {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      setLoans(data.data.loans);
    };

    handleFetchWithdraw();
  }, []);

  return (
    <div className="wrapper-container">
      <div className="intro-container">
        <span>View Loan Requests</span>
        <span className="refresh">
          <span>Refresh</span>
          <span>
            <LuRefreshCw className="refresh" />
          </span>
        </span>
      </div>

      <div className="title-container">
        <h2>Loans</h2>
      </div>


      <div className="input-container" id="status-input-container">
        <div className="container-x">
          <div className="input-bar">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              className="l-input"
              id="date-picker"
            />
            <FaRegCalendarAlt className="input-icon" />
          </div>

          <div className="input-bar">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              id="search-bar"
              onChange={handleInputChange}
            />
            <CiSearch className="input-icon" />
            <IoFilter className="input-icon" id="right-input-icon" />
          </div>
        </div>
        <div className="container-x" id="status-section">
          <div className="container-x">
            <span>ID</span>
            <span>Amount(₦)</span>
            <span>Duration</span>
            <span>Status</span>
            <span></span>
          </div>

          {loans.map((loan, index) => (
            <div className="container-x" key={index}>
              <span>
                <span>
                  <PiIdentificationBadgeFill />
                </span>
                <span>{loan.id}</span>
              </span>
              <span>{loan.amount}</span>
              <span>{loan.duration}</span>
              <span
                className={
                  loan.status === "Accepted"
                    ? "approved"
                    : loan.status === "Pending"
                    ? "pending"
                    : "declined"
                }
              >
                {loan.status}
              </span>
              <span>
                <MdEdit />
                <MdOutlineDelete />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminLoan;
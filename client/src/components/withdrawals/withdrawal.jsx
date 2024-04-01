<<<<<<< HEAD
import React, { useState, useEffect, PureComponent } from "react";
=======
import React, { useState, PureComponent } from "react";
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { BiRefresh } from "react-icons/bi";
import { PiBankBold } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineSavings } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { TfiDownload } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import "../admin/home.css";
<<<<<<< HEAD
import "../LoanStatus/LoanStatus.css";
import { useAuthContext } from "../../context/authContext";

const Withdrawal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [withdrawals, setWithdrawals] = useState([]);
  console.log(withdrawals);
  const { user } = useAuthContext();
=======

const Withdrawal = () => {
  const [searchTerm, setSearchTerm] = useState("");
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };
<<<<<<< HEAD

  const token = user.data.token;

  useEffect(() => {
    const handleFetchWithdraw = async () => {
      const res = await fetch("http://localhost:4000/withdrawal", {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      setWithdrawals(data);
    };

    handleFetchWithdraw();
  }, []);

  return (
    <div className="dashboard">
=======
  return (
    <div className="dashboard">
      
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
      <div className="dashboard-item">
        <div className="main-top">
          <div className="welcome">
            <h4>View Withdraw Request</h4>
          </div>
          <div className="refresh">
            <h4>Refresh</h4> <BiRefresh />
          </div>
        </div>
        <h2>Withdrawals</h2>

        <div className="reports">
          <div className="report-row">
            <input type="date" className="date" />
            <div className="search">
              <form onSubmit={handleSubmit}>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleChange}
                />
                {/* <button type="submit">Search</button> */}
              </form>
            </div>
          </div>
          <div className="table">
<<<<<<< HEAD
            {withdrawals.length < 1 ? (
              <p>No widthdrawal has been made yet</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Amount(N)</th>
                    <th>Purpose</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawals.data.withdrawals.map((withdrawal, index) => (
                    <tr key={index}>
                      <td>
                        <FiUser />
                        {withdrawal.staffID}
                      </td>
                      <td>{withdrawal.amount}</td>
                      <td>{withdrawal.purpose}</td>
                      <td
                        className={`${
                          withdrawal.status === "Pending"
                            ? "pending"
                            : withdrawal.status === "Approved"
                            ? "approved"
                            : "rejected"
                        }`}
                      >
                        {withdrawal.status}
                      </td>
                      <td>
                        <MdEdit />
                        <RiDeleteBin7Line />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
=======
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount(N)</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiUser />
                    John Doe
                  </td>
                  <td>7600</td>
                  <td>2024-03-23</td>
                  <td className="status st1">Active</td>
                  <td>
                    <MdEdit />
                    <RiDeleteBin7Line />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FiUser />
                    Jane Smith
                  </td>
                  <td>20,000</td>
                  <td>2024-03-24</td>
                  <td className="status st2">Inactive</td>
                  <td>
                    <MdEdit />
                    <RiDeleteBin7Line />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FiUser />
                    Alice Johnson
                  </td>
                  <td>3000</td>
                  <td>2024-03-25</td>
                  <td className="status st1">Active</td>
                  <td>
                    <MdEdit />
                    <RiDeleteBin7Line />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FiUser />
                    Bob Brown
                  </td>
                  <td>6000</td>
                  <td>2024-03-26</td>
                  <td className="status st2">Inactive</td>
                  <td>
                    <MdEdit />
                    <RiDeleteBin7Line />
                  </td>
                </tr>
              </tbody>
            </table>
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;

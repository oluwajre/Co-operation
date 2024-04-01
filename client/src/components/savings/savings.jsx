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
import { useAuthContext } from "../../context/authContext";

const Savings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [savings, setSavings] = useState([]);
  const { user } = useAuthContext();

  console.log(savings);
=======

const Savings = () => {
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
    const handleFetchSavings = async () => {
      const res = await fetch("http://localhost:4000/contribution", {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      setSavings(data.data.contributions);
    };

    handleFetchSavings();
  }, []);

=======
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
  return (
    <div className="dashboard">
      <div className="dashboard-item">
        <div className="main-top">
          <div className="welcome">
            <h4>Review New Members</h4>
          </div>
          <div className="refresh">
            <h4>Refresh</h4> <BiRefresh />
          </div>
        </div>
        <h2>Savings</h2>

        <div className="reports">
          <div class="report-row">
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
          <div className="table ri-table">
<<<<<<< HEAD
            {savings < 1 ? (
              <p>No saving has been made yet</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Balance</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {savings.map((saving, index) => (
                    <tr key={index}>
                      <td>
                        <FiUser />
                        {saving.staffID}
                      </td>
                      <td>{saving.balance}</td>
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
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiUser />
                    John Doe
                  </td>
                  <td>Admin</td>
                  <td>2024-03-23</td>
                </tr>
                <tr>
                  <td>
                    <FiUser />
                    Jane Smith
                  </td>
                  <td>User</td>
                  <td>2024-03-24</td>
                </tr>
                <tr>
                  <td>
                    <FiUser />
                    Alice Johnson
                  </td>
                  <td>Manager</td>
                  <td>2024-03-25</td>
                </tr>
                <tr>
                  <td>
                    <FiUser />
                    Bob Brown
                  </td>
                  <td>Developer</td>
                  <td>2024-03-26</td>
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

export default Savings;

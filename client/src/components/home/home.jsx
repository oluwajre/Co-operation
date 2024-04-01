import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { BiRefresh } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import "./home.css";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/authContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    adminId: "",
    role: "AccountOfficer",
  });

  const handleCreateSubAdmin = async () => {
    const res = await fetch("http://localhost:4000/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        phone: form.phone,
        password: form.password,
        adminId: form.adminId,
        role: form.role,
      }),
    });

    if (!res.ok)
      return toast.error("An error occured while creating sub admin");

    return toast.success("Sub admin registered succesfuly");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-item">
        <div className="main-top">
          <div className="welcome">
            <h4>Good morning, welcome 👋 </h4>
          </div>
          <div className="refresh">
            <h4>Refresh</h4> <BiRefresh />
          </div>
        </div>
        <h2>{user.data.admin}</h2>
        <div className="banner">
          <h3>Sub-Admin</h3>
          <h5>Add sub-administrators to the system</h5>
        </div>
        <div className="form">
          <div className="form-item">
            <div className="form-min">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={form.firstname}
                onChange={(e) =>
                  setForm({ ...form, firstname: e.target.value })
                }
                name="firstName"
                placeholder=" Enter your first name"
              />
            </div>

            <div className="form-min">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={form.lastname}
                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="form-item">
            <div className="form-min">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                name="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-min">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="form-item">
            <div className="form-min">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-min">
              <label htmlFor="adminId">Admin ID</label>
              <input
                type="text"
                id="adminId"
                value={form.adminId}
                onChange={(e) => setForm({ ...form, adminId: e.target.value })}
                name="adminId"
                placeholder="Enter your admin ID"
              />
            </div>
          </div>
        </div>
        <div className="add-button">
          <button onClick={handleCreateSubAdmin}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

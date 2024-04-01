<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/authContext";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [adminLogin, setAdminLogin] = useState(false);

  console.log(adminLogin);
  const { setUser } = useAuthContext();

  const handleChangeId = (event) => {
    const value = event.target.value;
    setId(value);
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async () => {
    const res = await fetch(
      adminLogin
        ? "http://localhost:4000/admin/login"
        : "http://localhost:4000/member/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          memberId: id,
          password,
        }),
      }
    );

    if (!res.ok) return toast.error("Login unsuccesful");

    const data = await res.json();

    localStorage.setItem("user", JSON.stringify(data));

    setUser(data);

    toast.success("Logged in succesfuly");

    if (adminLogin) return (window.location.href = "/registersubadmin");
    else return (window.location.href = "/settings");

    // return (window.location.href = "/settings");
  };
  return (
    <div className="screen-container">
      <img src="./abstract.svg" alt="" className="abstract" />
      <div className="left">
        <div className="logo">
          <img src="./logo.png" alt="Logo" className="logo-image" />
        </div>
        <div className="login-image">
          <div className="login-image" id="main-login-image">
            <img src="./l-image.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="title-container">
          <h3>Login</h3>
        </div>
        <div className="input-container">
          <div className="input-bar">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              className="l-input"
              placeholder="Enter id"
              value={id}
              onChange={handleChangeId}
            />
            <PiIdentificationBadgeFill
              className="input-icon"
              id="l-specific-icon"
            />
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </div>

          <div className="input-bar">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              className="l-input"
              placeholder="Enter password"
              value={password}
              onChange={handleChangePassword}
            />
            <RiLockPasswordFill className="input-icon" id="l-specific-icon" />
          </div>

          <div className="input-bar">
            <div className="split-items">
              <p className="f-password">
                <Link to="">Forgot Password?</Link>
              </p>

              <p onClick={() => setAdminLogin(true)}>
                {adminLogin ? "Login as member" : "Login as an admin"}
              </p>
            </div>
          </div>

          <div className="submit-container">
            <button onClick={handleSubmit}>
              <Link to="/withdraw">Login</Link>
            </button>
          </div>

          <div className="input-bar">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from 'react-toastify';

const Login = () => {

    const notify = () => {
        toast.success("Successfuly Log in");
    }

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState(null);

    const handleChangeId = (event) => {
        const value = event.target.value;
        setId(value);
      };

    const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    };


  return (
    <div className="screen-container">
        <img src="./abstract.svg" alt="" className='abstract'/>
        <div className="left">
            <div className="logo"><img src="./logo.png" alt="Logo" className='logo-image'/></div>
            <div className="login-image">
                <div className="login-image" id='main-login-image'>
                    <img src="./l-image.jpeg" alt="" />
                </div>
            </div>
        </div>
        <div className="right">
            <div className="title-container">
                <h3>Login</h3>
            </div>
            <div className="input-container">
                <div className="input-bar">
                    <label htmlFor="id">ID</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        className='l-input'
                        placeholder="Enter id"
                        value={id}
                        onChange={handleChangeId}
                    />
                    <PiIdentificationBadgeFill className='input-icon' id='l-specific-icon'/>
                    {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
            </div>

            <div className="input-bar">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        className='l-input'
                        placeholder="Enter password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <RiLockPasswordFill className='input-icon' id='l-specific-icon'/>
            </div>

            <div className="input-bar">
                <p className='f-password'><Link to="">Forgot Password?</Link></p>
            </div>

            <div className="submit-container">
                <button onClick={notify}>Login</button>
            </div>

            <div className="input-bar">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf

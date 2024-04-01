<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import "./Register.css";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

const Register = ({ showTerms }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState(null);

  const handleChangeFname = (event) => {
    const value = event.target.value;
    setFname(value);
  };

  const handleChangeLname = (event) => {
    const value = event.target.value;
    setLname(value);
  };

  const handleChangeId = (event) => {
    const value = event.target.value;
    setId(value);
  };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleRegister = async () => {
    const res = await fetch("http://localhost:4000/member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        firstname: fname,
        lastname: lname,
        staffId: id,
        email,
        password,
      }),
    });

    if (!res.ok) return toast.error("User could not be created");

    const data = await res.json();

    console.log(data);

    return toast.success("Registered succesfully");
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
          <h3>Register</h3>
        </div>

        <div className="input-container">
          <div className="input-bar">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="l-input"
              placeholder="Enter first name"
              value={fname}
              onChange={handleChangeFname}
            />
            <PiIdentificationBadgeFill
              className="input-icon"
              id="l-specific-icon"
            />
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </div>

          <div className="input-bar">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="l-input"
              placeholder="Enter last name"
              value={lname}
              onChange={handleChangeLname}
            />
            <PiIdentificationBadgeFill
              className="input-icon"
              id="l-specific-icon"
            />
          </div>

          <div className="input-bar">
            <label htmlFor="id">Staff Id</label>
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
          </div>

          <div className="input-bar">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              className="l-input"
              placeholder="Enter email"
              value={email}
              onChange={handleChangeEmail}
            />
            <MdEmail className="input-icon" id="l-specific-icon" />
          </div>

          <div className="input-bar">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="l-input"
              placeholder="Enter password"
              value={password}
              onChange={handleChangePassword}
            />
            <MdEmail className="input-icon" id="l-specific-icon" />
          </div>

          <div className="input-bar" id="terms">
            <input type="checkbox" id="terms-checkbox" />
            <label htmlFor="terms">
              By Checking the box, you agree to our{" "}
              <Link onClick={showTerms}>Terms</Link> and{" "}
              <Link onClick={showTerms}>Conditions</Link>.
            </label>
          </div>

          <div className="submit-container">
            <button onClick={handleRegister}>Register</button>
          </div>

          <div className="input-bar">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'
import './Register.css'
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { toast } from 'react-toastify';


const Register = ({showTerms}) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    // const [errorMessage, setErrorMessage] = useState(null);

    const handleChangeFname = (event) => {
        const value = event.target.value;
        setFname(value);
      };

      const handleChangeLname = (event) => {
        const value = event.target.value;
        setLname(value);
      };

    const handleChangeId = (event) => {
        const value = event.target.value;
        setId(value);
      };

    const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    };

    const notify = () => {
        toast.success("Successfuly Verified");
    }


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
                <h3>Register</h3>
            </div>

            
            <div className="input-container">

                <div className="input-bar">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className='l-input'
                        placeholder="Enter first name"
                        value={fname}
                        onChange={handleChangeFname}
                    />
                    <PiIdentificationBadgeFill className='input-icon' id='l-specific-icon'/>
                    {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
                </div>

                <div className="input-bar">
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        className='l-input'
                        placeholder="Enter last name"
                        value={lname}
                        onChange={handleChangeLname}
                    />
                    <PiIdentificationBadgeFill className='input-icon' id='l-specific-icon'/>
                </div>

                <div className="input-bar">
                    <label htmlFor="id">Staff Id</label>
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
                </div>

                <div className="input-bar">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className='l-input'
                            placeholder="Enter email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        <MdEmail className='input-icon' id='l-specific-icon'/>
                </div>

                <div className="input-bar" id='terms'>
                    <input type='checkbox' id='terms-checkbox'/>
                    <label htmlFor="terms">By Checking the box, you agree to our <Link onClick={showTerms}>Terms</Link> and <Link onClick={showTerms}>Conditions</Link>.</label>
                </div>

                <div className="submit-container">
                    <button onClick={notify}>Register</button>
                </div>

                <div className="input-bar">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf

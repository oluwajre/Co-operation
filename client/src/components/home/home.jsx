import React from 'react'
import "./home.css";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
import { FaUsers } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { MdOutlineSavings } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";

const Home = () => {
  return (
    <div>
      <div className="landing navbar-actions">
        <div>
          <h1>Empowering Your Financial Journey Together</h1>
          <br />
          <br />
          <h4>
            Join a community dedicated to mutual growth and financial
            empowerment.
          </h4>
          <h4>Discover how we can achieve more together</h4>
          <br />
<<<<<<< HEAD
          <button>Join us</button>
        </div>
        <div>
          <img src="src\assets\photo_2024-03-25_22-53-06.jpg" alt="" />
=======
          <button><Link to="/register">Join Us</Link></button>
        </div>
        <div>
          <img src="src\assets\photo_2024-03-25_22-53-06.jpg" alt="" className='login-image' id='home-image'/>
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
        </div>
      </div>
      <div className="core">
        <div className="core-items">
          <div>
<<<<<<< HEAD
            <FaUsers />
            Membership Enrollment
          </div>
          <div>
            <MdOutlineSavings />
=======
            <FaUsers className='iconColor'/>
            Membership Enrollment
          </div>
          <div>
            <MdOutlineSavings className='iconColor'/>
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
            Contribution Management
          </div>
        </div>
        <div className="core-items">
          <div>
<<<<<<< HEAD
            <BsBank />
            Loan Application Management
          </div>
          <div>
            <HiDocumentReport />
=======
            <BsBank className='iconColor'/>
            Loan Application Management
          </div>
          <div>
            <HiDocumentReport className='iconColor'/>
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
            Report Auto-Generation
          </div>
        </div>
      </div>
      <div className="choose">
        <div className="choose-items">
          <img src="src\assets\photo_2024-03-25_22-53-01.jpg" alt="" />
        </div>
        <div className="choose-items navbar-actions">
          <h2>Why Choose Us</h2>
          <br />
          <p>
            Choose <span>BUCOOP</span> means opting for a partner that
            understands the unique challenges and opportunities
            withincooperative societies. Our system is not just a tool; It's a
            solution designed to meet the nuanced needs of our clients, ensuring
            that managing a cooperative society is both effective and
            hassle-free.
          </p>
          <br />
          <br />
<<<<<<< HEAD
          <button>Join Us</button>
        </div>
      </div>
=======
          <button><Link to="/register">Join Us</Link></button>
        </div>
      </div>
      <footer className="footer">
        <div className="f-container">
          <div className="row">
            <div className="footer-col">
              <img src="src\assets\photo_2024-03-26_01-38-55.jpg" alt="" />
              <ul className="f-ul">
                <li>
                  Babcock Coperative Manageent System (BUCOOP) champions mutual
                  financial growth through collborative savings and loans
                </li>
              </ul>
            </div>
            <div className="footer-col help">
              <ul className="f-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Email Address</h3>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <h4>Join the Newsletter</h4>
            </div>
          </div>
        </div>
      </footer>
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
    </div>
  );
};
export default Home
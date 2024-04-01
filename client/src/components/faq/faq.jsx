import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./faq.css";

const Faq = () => {
  useEffect(() => {
    // Function to handle toggle effect for FAQ items
    const toggleFAQ = (event) => {
      const accordion = event.currentTarget;
      const panel = accordion.nextElementSibling;

      panel.style.display = panel.style.display === "block" ? "none" : "block";
    };

    // Add click event listeners to all elements with the class "accordion"
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", toggleFAQ);
    });

    // Cleanup event listeners when the component is unmounted
    return () => {
      accordions.forEach((accordion) => {
        accordion.removeEventListener("click", toggleFAQ);
      });
    };
  }, []);

  return (
    <div>
      <div className="bgc-image">
        <div className="bgc-overlay">
          <div className="faq-head">
            <h1>FAQs</h1>
          </div>
        </div>
      </div>
      <div className="wrappers">
        <div className="faq">
          <button className="accordion">
            How do I join BUCOOP
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            Can I apply for a loan immediately after joining?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Members are eligible to apply for loans after a brief waiting
              period, allowing us to ensure a foundation of mutual trust and
              contribution
            </p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            What are the benefits of BUCOOP membership?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            How are loan applications reviewed and approved
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            Is there a way to increase my monthly contribution
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            What happens if I want to terminate my membership
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>
      </div>
<<<<<<< HEAD

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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Join the Newsletter</h4>

              <h3>Email Address</h3>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <br />
              <br />
              <button>Join Us</button>
            </div>
          </div>
        </div>
      </footer>
=======
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
    </div>
  );
};
export default Faq

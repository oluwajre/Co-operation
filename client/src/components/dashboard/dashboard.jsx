import React from "react";
import "./dashboard.css";

const UserDashboard = () => {
  return (
    <div className="main-container">
      <div className="dash">
        <div className="flex-row-a">
          <div className="text">
            <div className="welcome-text">
              <div className="hello">
                <div className="flex-row-d">
                  <div className="mask-group" />
                  <div className="mask-group-3" />
                  <div className="image" />
                  <div className="mask-group-4" />
                </div>
                <div className="rectangle" />
              </div>
              <span className="welcome-message">Good morning, welcome </span>
            </div>
            <span className="crown">Crown</span>
          </div>
          <div className="refresh">
            <span className="refresh-text">Refresh</span>
            <div className="refresh-icon">
              <div className="vector-5" />
            </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="bg-6">
            <div className="flex-column">
              <span className="total-contributions">Total Contributions</span>
              <span className="total-amount">₦40,000.00</span>
            </div>
            <div className="donate" />
          </div>
          <div className="bg-7">
            <div className="flex-column-8">
              <span className="outstanding-loans">Outstanding Loans</span>
              <span className="loan-amount">₦210,000.00</span>
            </div>
            <div className="bank-building" />
          </div>
          <div className="get-cash" />
        </div>
        <div className="flex-row-cac">
          <span className="contribution-report">Contribution Report</span>
        </div>
        <div className="flex-row-ff">
          <div className="bg-b">
            <div className="flex-row-af">
              <button className="contribution">
                <div className="details">
                  <span className="total-contribution">Total Contribution</span>
                  <div className="chevron-down">
                    <div className="vector-c" />
                  </div>
                </div>
              </button>
              <button className="monthly">
                <div className="details-d">
                  <span className="monthly-e">Monthly</span>
                  <div className="chevron-down-f">
                    <div className="vector-10" />
                  </div>
                </div>
              </button>
              <div className="x">
                <span className="k-140k">140k</span>
                <span className="k-120k">120k</span>
                <span className="k-100k">100k</span>
                <span className="k-80k">80k</span>
                <span className="k-60k">60k</span>
                <span className="k-40k">40k</span>
                <span className="k-20k">20k</span>
                <span className="k-0k">0k</span>
              </div>
              <div className="line" />
              <div className="vector-11">
                <div className="line-12" />
                <div className="vector-13" />
                <div className="bg-14">
                  <span className="june">18 June 2022</span>
                  <span className="dollar-amount">$ 78,560</span>
                </div>
                <div className="group" />
              </div>
              <div className="amount">
                <span className="amount-15">Amount</span>
              </div>
            </div>
            <div className="flex-row-dc">
              <div className="day-axis">
                <span className="days">Days</span>
              </div>
              <div className="day">
                <span className="span">12</span>
                <span className="span-16">13</span>
                <span className="span-17">14</span>
                <span className="span-18">15</span>
                <span className="span-19">16</span>
                <span className="span-1a">17</span>
                <span className="span-1b">18</span>
                <span className="span-1c">19</span>
                <span className="span-1d">20</span>
                <span className="span-1e">21</span>
                <span className="text-25">22</span>
              </div>
            </div>
            <div className="month">
              <span className="span-1f">February</span>
            </div>
          </div>
        </div>
        {/* <span className="activity-summary">Activity Summary</span> */}
        {/* <div className="bg-24">
          <div className="view-all">
            <span className="span-25">View More</span>
            <div className="arrow" />
          </div>
          <div className="flex-column-aad">
            <span className="span-26">History</span>
            <div className="line-27" />
            <div className="history">
              <div className="notification">
                <div className="arrow-28">
                  <div className="shape" />
                </div>
                <div className="rectangle-29" />
              </div>
              <span className="span-2a">Stesha</span>
              <span className="span-2b">Crown</span>
              <span className="span-2c">₦10,000</span>
              <span className="span-2d">Wed, Feb 19 2024</span>
              <span className="span-2e">10:45.20 AM</span>
              <span className="span-2f">Disbursed</span>
            </div>
            <div className="history-30">
              <div className="notification-31">
                <div className="logo" />
              </div>
              <span className="stesha">Stesha</span>
              <span className="crown-32">Crown</span>
              <span className="naira-amount-33">₦30,000</span>
              <span className="date-time">Mon, Feb 03 2024</span>
              <span className="time">10:45.20 AM</span>
              <span className="disbursed">Disbursed</span>
            </div>
            <div className="history-34">
              <div className="notification-35">
                <div className="arrow-36">
                  <div className="shape-37" />
                </div>
                <div className="rectangle-38" />
              </div>
              <span className="stesha-39">Stesha</span>
              <span className="crown-3a">Crown</span>
              <span className="naira-amount-3b">₦20,000</span>
              <span className="date-time-3c">Thur, Jan 20 2024</span>
              <span className="time-3d">10:45.20 AM</span>
              <span className="received">Received</span>
            </div>
            <div className="history-3e">
              <div className="notification-3f">
                <div className="arrow-40">
                  <div className="shape-41" />
                </div>
                <div className="rectangle-42" />
              </div>
              <span className="stesha-43">Stesha</span>
              <span className="crown-44">Crown</span>
              <span className="naira-amount-45">₦5,000</span>
              <span className="date-time-46">Fri, Jan 01 2024</span>
              <span className="time-47">10:45.20 AM</span>
              <span className="disbursed-48">Disbursed</span>
            </div>
          </div>
        </div> */}
      </div>
      <div className="get-cash-67" />
      <div className="get-cash-68" />
    </div>
  );
};

export default UserDashboard;

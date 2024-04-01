import React from "react";
import "./contribution.css";

const Contribution = () => {
  return (
    <div className="main-container">
      <div className="dash">
        <div>
          <h2 className="title-contri">Contribution</h2>
        </div>
        <div className="flex-row-b">
          <div className="bg-6">
            <div className="flex-row-aa">
              <span className="my-balance">My Balance</span>

              <span className="balance-amount">₦40,000.00</span>
            </div>
            <div className="flex-row">
              <div className="withdraw">
                <div className="request-money" />
                <span className="withdraw-7">Withdraw</span>
              </div>
              <div className="settings">
                <div className="settings-8" />
                <span className="settings-9">Settings</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row-16">
          <div className="bg-17">
            <span className="transaction-history">Transaction history</span>
            <div className="flex-row-aa-18">
              <span className="receiver">Receiver</span>
              <span className="type">Type</span>
              <span className="date-19">Date</span>
              <span className="amount">Amount</span>
            </div>
            <div className="history">
              <div className="history-1a">
                <div className="details-1b">
                  <div className="flex-row-bf">
                    <span className="sport">Sport</span>
                    <span className="date-1c">06 Dec 2020</span>
                    <div className="naira-div">
                      <span className="naira-span">₦</span>
                      <span className="amount-span">350</span>
                    </div>
                  </div>
                  <div className="line-div" />
                </div>
                <div className="name-div">
                  <span className="name-span">Stesha Crown</span>
                  <div className="icon-div">
                    <div className="profile-div">
                      <div className="vector-div" />
                      <div className="vector-div-1d" />
                    </div>
                    <div className="bg-div" />
                  </div>
                </div>
              </div>
              <div className="history-div">
                <div className="details-div">
                  <div className="flex-row-ecb-div">
                    <span className="sport-span">Sport</span>
                    <span className="date-span">06 Dec 2020</span>
                    <div className="naira-div-1e">
                      <span className="naira-span-1f">₦</span>
                      <span className="amount-span-20">350</span>
                    </div>
                  </div>
                  <div className="line-div-21" />
                </div>
                <div className="name-div-22">
                  <span className="name-span-23">Stesha Crown</span>
                  <div className="icon-div-24">
                    <div className="profile-div-25">
                      <div className="vector-div-26" />
                      <div className="vector-div-27" />
                    </div>
                    <div className="bg-div-28" />
                  </div>
                </div>
              </div>
              <div className="history-div-29">
                <div className="details-div-2a">
                  <div className="flex-row-ba-div">
                    <span className="sport-span-2b">Sport</span>
                    <span className="date-span-2c">06 Dec 2020</span>
                    <div className="naira-div-2d">
                      <span className="naira-span-2e">₦</span>
                      <span className="amount-span-2f">350</span>
                    </div>
                  </div>
                  <div className="line-div-30" />
                </div>
                <div className="name-div-31">
                  <span className="name-span-32">Stesha Crown</span>
                  <div className="icon-div-33">
                    <div className="profile-div-34">
                      <div className="vector-div-35" />
                      <div className="vector-36" />
                    </div>
                    <div className="bg-37" />
                  </div>
                </div>
              </div>
              <div className="history-38">
                <div className="details-39">
                  <div className="flex-row-3a">
                    <span className="sport-3b">Sport</span>
                    <span className="dec">06 Dec 2020</span>
                    <div className="naira">
                      <span className="naira-3c">₦</span>
                      <span className="amount-3d">350</span>
                    </div>
                  </div>
                  <div className="line" />
                </div>
                <div className="name">
                  <span className="stesha-crown">Stesha Crown</span>
                  <div className="icon">
                    <div className="profile-3e">
                      <div className="vector-3f" />
                      <div className="vector-40" />
                    </div>
                    <div className="bg-41" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="log-out">
        <div className="logout">
          <div className="details-60">
            <div className="logout-61" />
          </div>
          <span className="logout-62">Logout</span>
        </div>
      </button>
    </div>
  );
};

export default Contribution;

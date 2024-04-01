import React from 'react'

import { Helmet } from 'react-helmet'

import './dashboard-member.css'

const DashboardMember = (props) => {
  return (
    <div className="dashboard-member-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="dashboard-member-dashboard-member">
        <div className="dashboard-member-side-bar">
          <img
            src="/external/bg5148-kqah-400w.png"
            alt="Bg5148"
            className="dashboard-member-bg"
          />
          <img
            src="/external/line25148-l6qm.svg"
            alt="Line25148"
            className="dashboard-member-line2"
          />
          <div className="dashboard-member-header">
            <div className="dashboard-member-new-logo">
              <img
                src="/external/logo5022-pgoo-200h.png"
                alt="Logo5022"
                className="dashboard-member-logo"
              />
              <span className="dashboard-member-text016">
                <span>BUCOOP</span>
              </span>
            </div>
          </div>
          <div className="dashboard-member-logout">
            <div className="dashboard-member-logout1">
              <div className="dashboard-member-details">
                <img
                  src="/external/logout5149-gbrsn.svg"
                  alt="Logout5149"
                  className="dashboard-member-logout2"
                />
              </div>
              <span className="dashboard-member-text018">
                <span>Logout</span>
              </span>
            </div>
          </div>
        </div>
        <div className="dashboard-member-dash">
          <div className="dashboard-member-text020">
            <div className="dashboard-member-welcome-text">
              <span className="dashboard-member-text021">
                <span>
                  Good morning, welcome
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="dashboard-member-hello">
                <div className="dashboard-member-maskgroup">
                  <img
                    src="/external/image147215-ra5h-200h.png"
                    alt="image147215"
                    className="dashboard-member-image14"
                  />
                </div>
                <img
                  src="/external/image147215-9mqo-200h.png"
                  alt="image147215"
                  className="dashboard-member-image141"
                />
                <div className="dashboard-member-maskgroup1">
                  <img
                    src="/external/image147215-2im-200h.png"
                    alt="image147215"
                    className="dashboard-member-image142"
                  />
                  <img
                    src="/external/rectangle57215-l26.svg"
                    alt="Rectangle57215"
                    className="dashboard-member-rectangle5"
                  />
                </div>
                <img
                  src="/external/rectangle77215-b7yg.svg"
                  alt="Rectangle77215"
                  className="dashboard-member-rectangle7"
                />
                <div className="dashboard-member-maskgroup2">
                  <img
                    src="/external/image147215-xae-200h.png"
                    alt="image147215"
                    className="dashboard-member-image143"
                  />
                  <img
                    src="/external/rectangle57215-ck5d.svg"
                    alt="Rectangle57215"
                    className="dashboard-member-rectangle51"
                  />
                </div>
              </div>
            </div>
            <span className="dashboard-member-text023">
              <span>Crown</span>
            </span>
          </div>
          <div className="dashboard-member-refresh">
            <span className="dashboard-member-text025">
              <span>Refresh</span>
            </span>
            <img
              src="/external/solarrefreshbold6611-988a.svg"
              alt="solarrefreshbold6611"
              className="dashboard-member-solarrefreshbold"
            />
          </div>
          <div className="dashboard-member-boards">
            <div className="dashboard-member-contributions">
              <img
                src="/external/bg6611-1k0e-300h.png"
                alt="Bg6611"
                className="dashboard-member-bg1"
              />
              <div className="dashboard-member-text027">
                <span className="dashboard-member-text028">
                  <span>Total Contributions</span>
                </span>
                <span className="dashboard-member-text030">
                  <span>₦40,000.00</span>
                </span>
              </div>
              <img
                src="/external/donate6712-8lk-200h.png"
                alt="Donate6712"
                className="dashboard-member-donate1"
              />
            </div>
            <div className="dashboard-member-loans">
              <img
                src="/external/bg6712-8t9m-300h.png"
                alt="Bg6712"
                className="dashboard-member-bg2"
              />
              <img
                src="/external/getcash6712-1p9e-200h.png"
                alt="GetCash6712"
                className="dashboard-member-get-cash"
              />
              <div className="dashboard-member-text032">
                <span className="dashboard-member-text033">
                  <span>Outstanding Loans</span>
                </span>
                <span className="dashboard-member-text035">
                  <span>₦210,000.00</span>
                </span>
              </div>
              <img
                src="/external/bankbuilding6713-jmu-200h.png"
                alt="BankBuilding6713"
                className="dashboard-member-bank-building1"
              />
            </div>
            <div className="dashboard-member-withdrawal">
              <img
                src="/external/bg6712-r4af-300h.png"
                alt="Bg6712"
                className="dashboard-member-bg3"
              />
              <img
                src="/external/getcash6712-h9jp-200h.png"
                alt="GetCash6712"
                className="dashboard-member-get-cash1"
              />
              <div className="dashboard-member-text037">
                <span className="dashboard-member-text038">
                  <span>Withdrawal Balance</span>
                </span>
                <span className="dashboard-member-text040">
                  <span>₦20,000.00</span>
                </span>
              </div>
              <img
                src="/external/requestmoney6713-58o-200h.png"
                alt="RequestMoney6713"
                className="dashboard-member-request-money1"
              />
            </div>
          </div>
          <div className="dashboard-member-dash-header">
            <div className="dashboard-member-search-bar">
              <img
                src="/external/iconsaxlinearsearchnormal16712-kfwf.svg"
                alt="IconsaxLinearsearchnormal16712"
                className="dashboard-member-iconsax-linearsearchnormal1"
              />
              <span className="dashboard-member-text042">
                <span>
                  Search...
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="dashboard-member-profile">
              <img
                src="/external/bg6611-h605-200h.png"
                alt="Bg6611"
                className="dashboard-member-bg4"
              />
              <img
                src="/external/iconamoonprofilefill6611-629s.svg"
                alt="iconamoonprofilefill6611"
                className="dashboard-member-iconamoonprofilefill"
              />
            </div>
            <img
              src="/external/vector6712-cy9e.svg"
              alt="Vector6712"
              className="dashboard-member-vector"
            />
            <img
              src="/external/materialsymbolsnotificationsunread6611-sk82.svg"
              alt="materialsymbolsnotificationsunread6611"
              className="dashboard-member-materialsymbolsnotificationsunread"
            />
          </div>
          <span className="dashboard-member-text044">
            <span>Set a Goal</span>
          </span>
          <div className="dashboard-member-contribution-report">
            <span className="dashboard-member-text046">
              <span>Contribution Report</span>
            </span>
            <img
              src="/external/bg6713-8n-500h.png"
              alt="Bg6713"
              className="dashboard-member-bg5"
            />
            <img
              src="/external/vector6713-29fn.svg"
              alt="Vector6713"
              className="dashboard-member-vector1"
            />
            <img
              src="/external/vector6713-wjhd.svg"
              alt="Vector6713"
              className="dashboard-member-vector2"
            />
            <div className="dashboard-member-day">
              <span className="dashboard-member-text048">
                <span>12</span>
              </span>
              <span className="dashboard-member-text050">
                <span>13</span>
              </span>
              <span className="dashboard-member-text052">
                <span>14</span>
              </span>
              <span className="dashboard-member-text054">
                <span>15</span>
              </span>
              <span className="dashboard-member-text056">
                <span>16</span>
              </span>
              <span className="dashboard-member-text058">
                <span>17</span>
              </span>
              <span className="dashboard-member-text060">
                <span>18</span>
              </span>
              <span className="dashboard-member-text062">
                <span>19</span>
              </span>
              <span className="dashboard-member-text064">
                <span>20</span>
              </span>
              <span className="dashboard-member-text066">
                <span>21</span>
              </span>
              <span className="dashboard-member-text068">
                <span>22</span>
              </span>
            </div>
            <div className="dashboard-member-month">
              <span className="dashboard-member-text070">
                <span>February</span>
              </span>
            </div>
            <div className="dashboard-member-amount">
              <span className="dashboard-member-text072">
                <span>Amount</span>
              </span>
            </div>
            <div className="dashboard-member-dayaxis">
              <span className="dashboard-member-text074">
                <span>Days</span>
              </span>
            </div>
            <div className="dashboard-member-x">
              <span className="dashboard-member-text076">
                <span>140k</span>
              </span>
              <span className="dashboard-member-text078">
                <span>120k</span>
              </span>
              <span className="dashboard-member-text080">
                <span>100k</span>
              </span>
              <span className="dashboard-member-text082">
                <span>80k</span>
              </span>
              <span className="dashboard-member-text084">
                <span>60k</span>
              </span>
              <span className="dashboard-member-text086">
                <span>40k</span>
              </span>
              <span className="dashboard-member-text088">
                <span>20k</span>
              </span>
              <span className="dashboard-member-text090">
                <span>0k</span>
              </span>
            </div>
            <img
              src="/external/line176713-3fpr.svg"
              alt="Line176713"
              className="dashboard-member-line17"
            />
            <img
              src="/external/line186713-bwi.svg"
              alt="Line186713"
              className="dashboard-member-line18"
            />
            <div className="dashboard-member-group6356077">
              <img
                src="/external/ellipse1856713-3d4n-200h.png"
                alt="Ellipse1856713"
                className="dashboard-member-ellipse185"
              />
              <img
                src="/external/ellipse1866713-6awb-200h.png"
                alt="Ellipse1866713"
                className="dashboard-member-ellipse186"
              />
            </div>
            <div className="dashboard-member-comment">
              <img
                src="/external/bg6713-tym.svg"
                alt="Bg6713"
                className="dashboard-member-bg6"
              />
              <span className="dashboard-member-text092">
                <span>$ 78,560</span>
              </span>
              <span className="dashboard-member-text094">
                <span>18 June 2022</span>
              </span>
            </div>
            <div className="dashboard-member-contribution">
              <div className="dashboard-member-details1">
                <span className="dashboard-member-text096">
                  <span>Total Contribution</span>
                </span>
                <img
                  src="/external/chevrondown6713-a8fd.svg"
                  alt="chevrondown6713"
                  className="dashboard-member-chevrondown"
                />
              </div>
            </div>
            <div className="dashboard-member-monthly">
              <div className="dashboard-member-details2">
                <span className="dashboard-member-text098">
                  <span>Monthly</span>
                </span>
                <img
                  src="/external/chevrondown6714-u0wj.svg"
                  alt="chevrondown6714"
                  className="dashboard-member-chevrondown1"
                />
              </div>
            </div>
          </div>
          <div className="dashboard-member-withdrawal1">
            <img
              src="/external/bg6914-8m1q-500h.png"
              alt="Bg6914"
              className="dashboard-member-bg7"
            />
            <img
              src="/external/getcash6914-hm8-200h.png"
              alt="GetCash6914"
              className="dashboard-member-get-cash2"
            />
            <div className="dashboard-member-text100">
              <span className="dashboard-member-text101">
                <span>Set a target goal</span>
              </span>
              <div className="dashboard-member-goal-number">
                <span className="dashboard-member-text103">
                  <span>₦20,000.00</span>
                </span>
              </div>
            </div>
            <img
              src="/external/goal7215-vjkv-200h.png"
              alt="Goal7215"
              className="dashboard-member-goal"
            />
            <button className="dashboard-member-button">
              <span className="dashboard-member-text105">
                <span>Set Goal</span>
              </span>
            </button>
          </div>
          <div className="dashboard-member-activity-summary">
            <span className="dashboard-member-text107">
              <span>Activity Summary</span>
            </span>
            <div className="dashboard-member-activity">
              <img
                src="/external/bg7014-gbij-400h.png"
                alt="Bg7014"
                className="dashboard-member-bg8"
              />
              <span className="dashboard-member-text109">
                <span>History</span>
              </span>
              <div className="dashboard-member-view-all">
                <span className="dashboard-member-text111">
                  <span>View More</span>
                </span>
              </div>
              <div className="dashboard-member-history1">
                <div className="dashboard-member-notification"></div>
                <span className="dashboard-member-text113">
                  <span>Stesha</span>
                </span>
                <span className="dashboard-member-text115">
                  <span>Crown</span>
                </span>
                <span className="dashboard-member-text117">
                  <span>₦10,000</span>
                </span>
                <span className="dashboard-member-text119">
                  <span>Wed, Feb 19 2024</span>
                </span>
                <span className="dashboard-member-text121">
                  <span>10:45.20 AM</span>
                </span>
                <span className="dashboard-member-text123">
                  <span>Disbursed</span>
                </span>
              </div>
              <div className="dashboard-member-history2">
                <div className="dashboard-member-notification1">
                  <img
                    src="/external/logo7215-kab-200h.png"
                    alt="Logo7215"
                    className="dashboard-member-logo1"
                  />
                </div>
                <span className="dashboard-member-text125">
                  <span>Stesha</span>
                </span>
                <span className="dashboard-member-text127">
                  <span>Crown</span>
                </span>
                <span className="dashboard-member-text129">
                  <span>₦30,000</span>
                </span>
                <span className="dashboard-member-text131">
                  <span>Mon, Feb 03 2024</span>
                </span>
                <span className="dashboard-member-text133">
                  <span>10:45.20 AM</span>
                </span>
                <span className="dashboard-member-text135">
                  <span>Disbursed</span>
                </span>
              </div>
              <div className="dashboard-member-history3">
                <div className="dashboard-member-notification2"></div>
                <span className="dashboard-member-text137">
                  <span>Stesha</span>
                </span>
                <span className="dashboard-member-text139">
                  <span>Crown</span>
                </span>
                <span className="dashboard-member-text141">
                  <span>₦20,000</span>
                </span>
                <span className="dashboard-member-text143">
                  <span>Thur, Jan 20 2024</span>
                </span>
                <span className="dashboard-member-text145">
                  <span>10:45.20 AM</span>
                </span>
                <span className="dashboard-member-text147">
                  <span>Received</span>
                </span>
              </div>
              <div className="dashboard-member-history4">
                <div className="dashboard-member-notification3"></div>
                <span className="dashboard-member-text149">
                  <span>Stesha</span>
                </span>
                <span className="dashboard-member-text151">
                  <span>Crown</span>
                </span>
                <span className="dashboard-member-text153">
                  <span>₦5,000</span>
                </span>
                <span className="dashboard-member-text155">
                  <span>Fri, Jan 01 2024</span>
                </span>
                <span className="dashboard-member-text157">
                  <span>10:45.20 AM</span>
                </span>
                <span className="dashboard-member-text159">
                  <span>Disbursed</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMember

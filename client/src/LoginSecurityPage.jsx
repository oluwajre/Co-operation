import React from 'react'
import LoginSecurity from './components/LoginSecurity/LoginSecurity'
import SideMenu from './components/SideMenu/SideMenu';
import Taskbar from './components/Taskbar/Taskbar';
import { MdDashboard } from "react-icons/md";
import { PiHandCoinsFill, PiBankFill } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalculator } from "react-icons/bs";
import Swal from 'sweetalert2'

const LoginSecurityPage = () => {
  const menuItems = [
    { label: 'Dashboard', link: '/userdashboard', icon: <MdDashboard /> },
    { label: 'Contribution', link: '/usercontribution', icon: <PiHandCoinsFill /> },
    { label: 'Withdrawal', link: '/withdraw', icon: <BiMoneyWithdraw /> },
    {
      label: 'Loan', link: '', icon: <PiBankFill />, children: [
        { miniLabel: 'Apply For Loan', miniLink: '/applyloan', miniIcon: <PiBankFill /> },
        { miniLabel: 'Check Loan Status', miniLink: '/loanstatus', miniIcon: <PiBankFill /> },
      ]
    },
    { label: 'Reports', link: '/userreports', icon: <TbReportSearch /> },
    { label: 'Loan Calculator', link: '/calculator', icon: <BsCalculator /> },
  ];

  const updatedSetting = () => {
    Swal.fire({
      icon: 'success',
      iconColor: '#00A3FF',
      text: 'Settings Updated',
      showConfirmButton: false,
      backdrop: true,
    })
  }

  return (
    <div className="screen-container">
      <SideMenu menuItems={menuItems} />
      <div className="primary-container">
        <Taskbar />
  <LoginSecurity updatedSetting={updatedSetting} />
          </div >
        </div >
        
      )
}

export default LoginSecurityPage
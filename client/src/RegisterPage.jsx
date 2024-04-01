import React from "react";
import Register from "./components/Register/Register";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const showTerms = () => {
    Swal.fire({
      titleText: "Terms and Conditions",
      iconColor: "#1a1a1a",
      text: "The terms and privacy form states the conditions for a loan which are: Loan requests are limited to regular Babcock staff who are cooperative members.-Must have a minimum six-month membership-The maximum loan is given as x2 of your savings-Must have accrued contribution to cover up for interest deduction-A repayment period of one year and six months (18 months)-Member must complete application forms with the consent of two guarantors-Pay a service fee of #300-Loan taken between #0<=#500k are to be paid back within a year (12 months) at an interest 7.5%-Loan above #500k must be paid back within 18 months with interest of 2%",
      showConfirmButton: false,
      backdrop: true,
    });
  };

  return (
    <div>
      <Register showTerms={showTerms} />
    </div>
  );
};

export default RegisterPage;

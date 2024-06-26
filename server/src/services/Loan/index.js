import {
  getAllLoans as allLoans,
  getAllLoanTypes,
  changeLoanStatus,
} from "../../database/repositories/LoanRepo.js";

export async function getAllLoans() {
  try {
    const loans = await allLoans();

    return loans;
  } catch (err) {
    throw err;
  }
}

export async function allLoanTypes() {
  try {
    const lt = await getAllLoanTypes();

    return lt;
  } catch (err) {
    throw err;
  }
}

export async function changeLoanStat(lid, newStatus) {
  try {
    const loan = await changeLoanStatus(lid, newStatus);

    return loan;
  } catch (err) {
    throw err;
  }
}

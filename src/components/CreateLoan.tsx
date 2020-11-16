import React, {useEffect, useState} from "react";
import {storeLoan} from "../index";
import {connect} from "react-redux";

import {LoanType} from "../types/LoanType";

import "../styles/main.css";

//@ts-ignore
const CreateLoan = ({loans, dispatch}) => {

    const INITIAL_LOAN_AMOUNT = 200;
    const INITIAL_LOAN_TERM = 15;

    const [loanAmount, setLoanAmount] = useState(INITIAL_LOAN_AMOUNT.toString());
    const [loanTerm, setLoanTerm] = useState(INITIAL_LOAN_TERM.toString());

    const [payment, setPayment] = useState('');

    const dispatchStoreLoan = () => {
        dispatch(storeLoan(
            loanAmount,
            loanTerm,
            payment,
            loans
        ));
    }

    useEffect(() => {
        const amountInCents = parseInt(loanAmount) * 100;
        const termInDays = parseInt(loanTerm);

        const paymentInCents = amountInCents + amountInCents * 0.1 * (termInDays / 30);

        setPayment((paymentInCents / 100).toFixed(2))
    }, [loanTerm, loanAmount])

    return (
        <div className="container w-full space-y-6 px-4 py-6 mx-auto mt-6">
            <div className="space-y-4">
                <input
                    className="max-w-lg w-full"
                    type="range" min="1" max="400"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                />
                <div className="text-2xl font-semibold">$ {loanAmount}</div>
            </div>
            <div className="space-y-4">
                <input
                    className="max-w-lg w-full"
                    type="range" min="1" max="30"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                />
                <div className="text-2xl font-semibold">{loanTerm} days</div>
            </div>
            <div className="text-2xl font-semibold">Payment $ {payment}</div>
            <button
                className="bg-gray-600 rounded-full px-6 py-3 hover:bg-blue-500 cursor-pointer ease-in-out"
                onClick={() => dispatchStoreLoan()}
            >
                Apply
            </button>
        </div>
    );
}

// @ts-ignore
const mapStateToProps = ({dispatch}) => {
    return {dispatch}
}

export default connect(mapStateToProps)(CreateLoan);
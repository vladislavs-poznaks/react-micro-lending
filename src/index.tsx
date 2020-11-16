import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {LoanType} from "./types/LoanType";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/main.css';

const initial = {
    loans: []
}

export const storeLoan = (
    initialAmount: string,
    initialTerm: string,
    initialInterestAmount: string,
    loans: LoanType[]
) => {
    const INITIAL_INTEREST_RATE = 10;

    return {
        type: 'STORE_LOAN',
        loans: [...loans, {
            id: loans.length + 1,
            initialAmountInCents: parseFloat(initialAmount) * 100,
            interestInPercents: INITIAL_INTEREST_RATE,
            termInDays: parseInt(initialTerm),
            interestInCents: parseFloat(initialInterestAmount) * 100
        }]
    }
}

const store = createStore((state = initial, action) => {
    switch (action.type) {
        case 'STORE_LOAN':
            //@ts-ignore
            return {...state, loans: action.loans}
        default:
            return state;
    }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

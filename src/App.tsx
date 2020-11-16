import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import './styles/main.css';

import CreateLoan from "./components/CreateLoan";

// @ts-ignore
const App = (state) => {

    console.log(state);

    return (
        <div className="bg-gray-900 text-white text-lg h-screen">
            <header className="border-b border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <h2 className="text-3xl font-hairline">Micro Lending App</h2>
                </div>
            </header>
            <main>
                <CreateLoan loans={state.loans} />
            </main>
        </div>
    );
}

// @ts-ignore
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(App);

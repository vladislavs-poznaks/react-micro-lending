import React from 'react';
import {connect} from "react-redux";
import './App.css';

// @ts-ignore
const App = (state) => {
    console.log(state);
    return (
        <div className="App">
            <h1 className="bg-blue-400">Micro Lending</h1>
        </div>
    );
}

// @ts-ignore
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(App);

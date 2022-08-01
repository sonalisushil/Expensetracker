import React from "react";
import {Routes, Route} from 'react-router-dom';
import Expenses from "./Expenses";
import Edit from "./Edit";
import Delete from "./Delete";
import Expenseform from "./Expenseform";
import Chart from "./Chart";

const Routing = () => {
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Expenses/>}></Route>
            <Route exact path="/expenses" element={<Expenses/>}></Route>
            <Route exact path="/edit/:userID" element={<Edit/>}></Route>
            <Route exact path="/delete/:userID" element={<Delete/>}></Route>
            <Route exact path="/expenseform" element={<Expenseform/>}></Route>
            <Route exact path="/chart/:userID" element={<Chart/>}></Route>
        </Routes>
        </>
    );
}
export default Routing;
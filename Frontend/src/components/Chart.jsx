import React from "react";
import Chartlist  from "./Chartlist";
import "./Chart.css";
import moment from "moment";

const Chart = (props) => {

let chartDataPoints = [
    
    {label: "Jan", amount:0},
    {label: "Feb", amount:0},
    {label: "Mar", amount:0},
    {label: "Apr", amount:0},
    {label: "May", amount:0},
    {label: "Jun", amount:0},
    {label: "Jul", amount:0},
    {label: "Aug", amount:0},
    {label: "Sep", amount:0},
    {label: "Oct", amount:0},
    {label: "Nov", amount:0},
    {label: "Dec", amount:0},
];

for(let record of props.filterRecord){
    let abc = record.date;
    let pqr = new Date(abc);
    let month = pqr.getMonth();
    chartDataPoints[month].amount = record.amount;
    console.log(month);
    console.log(record.amount);
}
//[100,200,500,20,25]
let priceArray = props.filterRecord.map(row => row.amount);
let maxPrice = Math.max(...priceArray)
console.log(maxPrice)
return(
    <div className="Barcolor">
        {
        chartDataPoints.map(record => {
            return(
                <Chartlist label={record.label} value={record.amount} maxPrice={maxPrice}/>
            );
        })

    }
        </div>
);

}
export default Chart; 
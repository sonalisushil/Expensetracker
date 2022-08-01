import React from "react";
import moment from "moment";
import './Expensedate.css';

const Expensedate = (props) =>{
    
  const newdate = props.row.date;
  let date = new Date(newdate);
    const year = date.getFullYear();
    const month=moment(props.row.date).format("MMM");
    const day = date.getDate();
    return(
      <>
        <div className="">
        <h1>{month}</h1>
        <h2>{year}</h2>
        <h1>{day}</h1>
    </div>
    </>
    );
}

export default Expensedate;
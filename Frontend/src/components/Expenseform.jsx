import React from "react";
import "./Expenseform.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Expdata from "./Expdata";


const Expenseform = () =>{

    const navigate  = useNavigate();

    const [title , setTitle] = useState("");
    const [amount ,setAmount] = useState();
    const [date , setDate] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            id:Math.random(),
            title:title,
            amount:amount,
            date: new Date(date)
        }
        console.log(dataObj);
        axios.post("http://localhost:5002/user",dataObj)
        // window.location.reload();
        setTitle("");
        setAmount("");
        setDate();
        alert("Data Add Successfully");
        navigate("/expenses");
       }

    return(
        <>

        <div className="Form">
          <form   onSubmit={submitHandler} >
              <div className="inputWrap">
                 <div className="inputCover">
              <label htmlFor="title" className="ttl">Title</label>
              <input type="text" name="title" onChange={e => setTitle(e.target.value)} value={title} required/> 
              </div>

              <div className="inputCover">
              <label htmlFor="amount" className="amt">Amount</label>
              <input type="number" name="amount" onChange={e => setAmount(e.target.value)} value={amount} required/> 
              </div>

              <div className="inputCover">
              <label htmlFor="date" className="dt">Date</label><br/>
              <input type="date" name="date" onChange={e => setDate(e.target.value)} value={date}/> <br/><br/>
              </div>

              <div className="Addexpense">
              <input type="submit" value="Add Expense" />
              </div>
              </div>
          </form>
          </div>

            <Expdata/>
          
     </>
   
    );
}

export default Expenseform;


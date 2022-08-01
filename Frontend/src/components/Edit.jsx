import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    window.scrollTo(0,0);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();

    const {userID} = useParams();

    const [userData, setuserData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5001/user/${userID}`)
        .then(async (res) => {
            const rawData = await res.data[0];
            console.log(rawData);

            setTitle(rawData.title);
            setAmount(rawData.amount);
            setDate(rawData.date);

            setuserData(rawData);
        }).catch(err => console.log(err));
    } , []);

    console.log(userData)
    const updateHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            id:Math.random(),
            title:title,
            amount:amount,
            date:new Date(date)
        }
        console.log(dataObj);
        axios.put(`http://localhost:5001/user/${userID}`,dataObj)
        .then((res) => {
            alert("user updated");
            navigate("/expenses");
        }).catch(err => {
            alert(err);
        })
    }
    return(
        <>
        <div className="Form">
          <form onSubmit={updateHandler}>
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

              <div className="UpdateForm">
               <button type="submit">Update Data</button>
              </div>
              </div>
          </form>
          </div>

        </>

    );
}
export default Edit;
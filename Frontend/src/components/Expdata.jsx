import axios from 'axios';
import React,{useState, useEffect} from 'react';
import "./Expenses.css";
import "./Expdata.css";
import { useNavigate, NavLink } from 'react-router-dom';
import moment from "moment";

const Expdata = () => {
    const navigate = useNavigate();

    const [userData , setuserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/user")
        .then(async(res) => {
            const rawData = await res.data;
            console.log(rawData);
            setuserData(rawData);
        }).catch(err => console.log(err));
    } , []);

    console.log(userData)

    const deleteUser = (_id) => {
        axios.delete(`http://localhost:5001/user/${_id}`)
        .then(res => {
            alert("User Deleted");
            navigate("/expenses")
        }).catch(err => {
            alert(err);
        })
        window.location.reload();
    }
    return(
        <>
        <div className='backgColor'>
            {
                userData.map(row => {
                    return(
                        <>
                        <div className='mainDiv'>
                            <div className='date'>
                                <h1>{moment(row.date).format("MMM")}</h1>
                                <h2>{moment(row.date).format("YYYY")}</h2>
                                <h1>{moment(row.date).format("DD")}</h1>
                            </div>

                            <div className='title'>
                                <h1>{row.title}</h1>
                            </div>

                            <div className='amount'>
                                ${row.amount}
                            </div>

                            <NavLink exact to = {`/edit/${row._id}`}>
                            <button className='btnEdit' type="submit">Edit</button>
                            </NavLink>

                            <button className='btnDelete' onClick={() => deleteUser(row._id)} type="submit">Delete</button>
                        </div>
                        </>
                    );
                })
            }
        </div>
        </>

    );
        
}
export default Expdata;
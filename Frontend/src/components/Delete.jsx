import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
    window.scrollTo(0,0);
    const navigate = useNavigate();
    const {userID} = useParams();

    const deleteHandler = () => {
        axios.delete(`http://localhost:5001/user/${userID}`)
        .then(res => {
            alert("User Deleted");
            navigate("/expenses")
        }).catch(err => {
            alert(err);
        })
    }
    return(
        <>
        <h1>Are you sure?</h1>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={() => navigate("/expenses")}>Cancel</button>
        </>
    );
}
export default Delete;
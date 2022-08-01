import React,{useState,useEffect} from "react";
import "./Expenses.css";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import moment from "moment";
import Expensedate from "./Expensedate";
import Filter from "./Filter";
import Chart from "./Chart";

const Expenses = () => {
      //console.log(props.month);
      //console.log(props.expenseData);
      //const navigate = useNavigate();

      const [userData, setuserData] = useState([]);

      useEffect(() => {
          axios.get("http://localhost:5001/user")
          .then(async(res) => {
              const rawData = await res.data;
              console.log(rawData);
              setuserData(rawData);
          }).catch(err => console.log(err));
      } , []);

      console.log(userData);

    //   const deleteUser = (_id) => {
    //       axios.delete(`http://localhost:5001/user/${_id}`)
    //       .then(res => {
    //           alert("User Deleted");
    //           Navigate("/expenses")
    //       }).catch(err => {
    //           alert(err);
    //       })
    //       window.location.reload();
    //   }

      const [updateFilterYear, setUpdateFilterYear] = useState();

      const filteredValue = (filteredYear) => {
          console.log(filteredYear);
          setUpdateFilterYear(filteredYear);

      }

      const filterRecord = userData.filter(row => {
          const fdate = moment(row.date).format("YYYY")
          if(updateFilterYear == "All"){
              return(row);
          }else{
              return(
            fdate === updateFilterYear
          );
          }
      });
      console.log(filterRecord);
      console.log(updateFilterYear);

    return(
        <>

        <div className="expebutton">
            <NavLink exact to = "/expenseform">
                <button className="btnAdd">Add New Expense</button>
            </NavLink>
        </div>

        <div className="bgColor">
            <Filter filteredValue = {filteredValue} />
            <Chart filterRecord = {filterRecord}/>

            {
                filterRecord.map(row => {
                    return(
                        <>
                        <div className="data">
                            <div className="date">
                                <Expensedate row = {row}/>
                            </div>

                            <div className="title">
                                <h1>{row.title}</h1>
                            </div>

                            <div className="amount">
                                ${row.amount}
                            </div>

                            <NavLink exact to = {`/edit/${row._id}`}>
                                <button className="btnEdit" type="submit">Edit</button>
                            </NavLink>

                            <NavLink exact to = {`/delete/${row._id}`}>
                                <button className="btnDelete" type="submit">Delete</button>
                            </NavLink>

                        </div>
                        </>
                    );
                })
            }
        </div>
       </>
    );
        }
         
export default Expenses;
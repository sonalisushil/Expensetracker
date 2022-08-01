import React, { useEffect, useState } from "react";
import "./Filter.css";
import moment from "moment";
import axios from "axios";

const Filter = ({filteredValue}) =>{

    const [userData, setuserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/user")
        .then(async(res) => {
            const rawData = await res.data;
            console.log(rawData);
            setuserData(rawData);
        }).catch(err => console.log(err));
    },[]);
    console.log(userData)

    const [filteredYear , setFilteredYear] = useState("All");
    const [noData, setNoData] =useState();

    const selectedYear = (e) =>{
            setFilteredYear(e.target.value);
           }
           const nodata = (e) => {
            setNoData(e.target.value);
           }
    filteredValue(noData);
    console.log(noData);
    filteredValue(filteredYear);
    console.log(filteredYear);

    let Filter =userData.map(row => {
        const abc = moment(row.date).format("YYYY");
        return(abc);
    })

    console.log(Filter);
    let yearFilter = Filter.filter((row, index) => {
        return(Filter.indexOf(row) == index)
    })

    console.log(yearFilter);
    let sortYear = yearFilter.sort((a,b) => a-b)
    console.log(sortYear);
    return(
        <div className="fbYear">
            <label className="lbl">Filter by Year</label>
        <select onChange={selectedYear}>
            <option value="All">All</option>
           {
            sortYear.map(row => {
                return(
                    <option value={row}>{row}</option>
                );
            })
           }
        </select>
        </div>
        
    );
}

export default Filter;
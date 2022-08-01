const express = require("express");
const app = express();
const cors = require("cors");



//Connected to MongoDB

const conn = require("./db");
conn.connection.on("connected",(err) => {
    if(err){
        console.error(err);
    }else{
        console.log("Connected to MongoDB");
    }
});
app.use(cors());
app.use(express.json());
app.use("/user",require("./routes/user"));

//For Create a Express Server
app.listen(5001, () => {
    console.log("Server is Start");
});
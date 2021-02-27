// this file is going to start the server

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

// set up SERVER
const app = express();
const PORT = process.env.PORT || 5000;    // provider or local  PORT
app.listen(PORT, ()=> console.log("Server started on port: " + PORT));

// JSON MIDDLEWARE (parses json texts in the body) 
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:3000"],      // allows these origins to use the server
        credentials: true                       // we are allowed to send cookies with tokens to this origins
    })
);

// set up an endpoint where we can listen a GET REQUEST on the /test path. 
// If we get it we call the function
// app.get("/test", (req, res)=>{
//     res.send("it works!");
// });

//connect to mongoDB
mongoose.connect(
    process.env.MONGODB_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err)=>{
        if(err) return console.error(err);
        
        console.log("Connected to MongoDB!");   
    }
);

// set up Routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));
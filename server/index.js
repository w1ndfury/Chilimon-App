// this file is going to start the server
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

/////////// set up SERVER //////////////

const app = express();

// provider or local  PORT
const PORT = process.env.PORT || 5000;    

// listen for requests
app.listen(PORT, ()=> console.log("Server started on port: " + PORT));

///////////////////////////////////////

// JSON MIDDLEWARE (parses json texts in the body) 
app.use(express.json());

app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:3000"],      // allows these origins to use the server
        credentials: true                       // we are allowed to send cookies with tokens to this origins
    })
);

//connect to mongoDB
mongoose.connect(
    process.env.MONGODB_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err)=>{
        if(err) return console.error(err);
        
        console.log("Connected to MongoDB!");   
    }
);

// ***set up Routes***

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));
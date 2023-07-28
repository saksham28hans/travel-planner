const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const destinationRoute = require('./routes/destination')

const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Database connection succssfull");})
.catch((err)=>{console.log(err);})

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/destination",destinationRoute)

app.listen(8900,()=>{
    console.log("Backend server is running");
})

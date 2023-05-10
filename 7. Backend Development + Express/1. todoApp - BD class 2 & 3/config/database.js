//1. import mongoose
const mongoose = require("mongoose");

//2. load config from env file
require("dotenv").config();

//3. dbConnect function - (DATABASE_URL, {useNewUrlParser, useUnifiedTopology}).then, catch - log, error, process.exit(1)
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

//4. export dbConnect function
module.exports = dbConnect;
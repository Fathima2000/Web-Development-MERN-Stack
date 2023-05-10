//1. server instantiate
const express = require("express");
const app = express();

//2. load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//3. middleware to parse json request body
app.use(express.json());

//4. import routes for TODO API, and mount the todo API routes
const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);

//5. start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//6. connect to the database
const dbConnect = require("./config/database");
dbConnect();

//7. Optional - default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
})
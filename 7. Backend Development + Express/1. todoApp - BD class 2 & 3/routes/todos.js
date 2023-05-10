//1. Instantiate Router
const express  = require("express");
const router = express.Router();

//2. Import controllers
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} =  require("../controllers/deleteTodo");

//3. Define API routes - router.METHOD(ROUTE, HANDLER)
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

//4. export router
module.exports = router;
//1. import the model
const Todo = require("../models/Todo");

//2. Define route handler
exports.createTodo = async(req,res) => {
    //try (1. extract from request{param/body})    (2. Function, checks)   (3. Success/Failure status)
    //catch (log, error, status)
    try {
            //1. extract from request body
            const {title,description} = req.body;
            //2. create a new Obj and insert in DB - function
            const response = await Todo.create({title,description});
            //3. send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

//3. Export route handler - done above only
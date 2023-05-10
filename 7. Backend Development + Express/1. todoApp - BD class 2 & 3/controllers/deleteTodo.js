//1. import the model
const Todo = require("../models/Todo");

//2. Define route handler
exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo DELETED",
        })
       
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}

//3. Export route handler - done above only
//import mongoose
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId, //It indicates that the post field is of type ObjectId, which is a special type used in MongoDB to represent the unique identifier of a document.
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);
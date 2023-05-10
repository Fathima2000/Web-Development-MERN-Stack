const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
    course: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    name: {
        type:String,
        required:true,
    },
    decription: {
        type:String,
    }
})

module.exports = mongoose.model("Tags", tagsSchema);
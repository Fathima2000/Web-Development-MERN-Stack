const mongoose = require("mongoose");

const subSections = new mongoose.Schema({
    title: {
        type:String,
    },
    timeDuration: {
        type:String,
    },
    decription: {
        type:String,
    },
    videoUrl:{
        type:String,
    }
})

module.exports = mongoose.model("SubSections", subSections);
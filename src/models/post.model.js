const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username : { type : String , required : true},
    name : { type : String , required : true},
    title : { type : String },
},
{
    versionKey : false,
    timestamps : true
})

module.exports = mongoose.model('post', postSchema);

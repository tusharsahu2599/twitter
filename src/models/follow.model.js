const mongoose = require('mongoose')
cons

const followSchema = new mongoose.Schema({
    user : {
        type : String,
        required : true
    },
},{versionKey:false})

module.exports = mongoose.model('follow', followSchema)
const mongoose = require('mongoose')

module.exports = ()=>{
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Connected to MongoDB")
        }
    }
    )
}
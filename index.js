const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
const bodyParser=require('body-parser');

const connection=require('./config/db');

const userController = require('../src/controllers/user.controller');
const postController = require('../src/controllers/post.controller');
const followController = require('../src/controllers/follow.controller');


app.use(bodyParser.json());

app.use(userController)
app.use(postController)
app.use(followController)


app.listen(port,()=>{
    try{
        connection.connect();
    }
    catch(err){
        console.log(err);
    }
    console.log(`Server is running on port ${port}`);
}
);


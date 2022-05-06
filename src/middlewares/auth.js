const jwt = require('jsonwebtoken')

const verify = (token)=>{
    return new Promise((response, reject)=>{
        jwt.verify(token, "admin@twitter", function(err, result){
            if(err)
                reject("Not an valid User")
            response(result.user)
        })})}

const authorization = (req, res, next)=>{
    if(!req.headers.authorization)
        return res.status(401).send({ status : "failed", message : err.message })

    if(!req.headers.authorization.startsWith('Bearer'))
        return res.status(401).send({status : "failed",message : err.message})

    const token = req.headers.authorization.split(' ')[1]
    let User;
    try {
        User = await verify(token)
    } 
    catch (error) {
        return res.status(401).send({status : "failed", message : error.message})
    }
    req.user = User
    next();
}

module.exports = {authorization};
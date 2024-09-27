const verify_token = require("../services/verify_token")

module.exports=(req,res,next)=>{
    const token =req.headers.token

    console.log("===============",token)
    const user = verify_token(token)
    req['user']=user
    next()

}
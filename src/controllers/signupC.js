const signupS = require("../services/signupS")
const responder = require("../shared//responder")
module.exports=(req,res)=>{
    const Responder = new responder(res)
    try {
        var signUp = signupS(req.body)
        Responder.success(signUp)
    } catch (error) {
        console.log(error)
    }
}
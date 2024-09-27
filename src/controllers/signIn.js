const signIn = require("../services/signIn")
const responder = require("../shared/responder")

module.exports =async (req,res)=>{
    const Responder = new responder(res)
try {
    var signin = await signIn(req.body) 
    console.log(signin)
    Responder.success({message:"success",payload:signin})
    
} catch (error) {
    Responder.fail(error.message)
}

}
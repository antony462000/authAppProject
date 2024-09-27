const update = require("../services/update")
const responder = require("../shared/responder")

module.exports = (req,res) =>{
    const Responder = new responder(res)
    try {
        console.log(req.user.id)
        req['body'].user_id=req.user.id
        var updateUser = update(req.body)
        Responder.success({message: "success", payload:updateUser})

        
    } catch (error) {
        Responder.fail(error.message)
    }
}
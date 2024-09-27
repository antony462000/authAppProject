const deleteUser = require("../services/deleteUser")
const responder = require("../shared/responder")
module.exports=async (req,res)=>{
    const Responder = new responder(res)
    try {
        req['body'].user_id=req.user.id
        var deleteaUser = await deleteUser(req.body)
        Responder.success({message : "Deleted Successfully",payload:deleteaUser})
    } catch (error) {
        Responder.fail({message:error.message})
    }
}
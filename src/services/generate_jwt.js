const jwt = require("jsonwebtoken")

module.exports=(user)=>{
    console.log(JSON.stringify(user))
    console.log("+++++++++++++++++++++++++")
    console.log(JSON.parse(JSON.stringify(user)))
    
   return jwt.sign(JSON.parse(JSON.stringify(user)),"secret",{expiresIn:8600})
    

}

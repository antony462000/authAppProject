const jwt = require("jsonwebtoken")
const responder = require("../shared/responder")

module.exports = (token) => {
    
    return jwt.verify(token, "secret")

}
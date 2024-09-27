const { User, Student } = require("../../models")

module.exports = async (data) => {
    console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ")
    
    console.log(data.user_id)
    await User.destroy({
        where: { id: data.user_id }
    })
    await Student.destroy({
        where: { user_id: data.user_id, }

    })
}
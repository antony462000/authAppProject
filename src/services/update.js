const { User, Department, Student } = require("../../models")

module.exports = async (user) => {
    await User.update({ name: user.name, email: user.email, password: user.password }, {
        where: {
            id: user.user_id
        }
    })

    await Student.update({ college: user.college, dept_id: user.dept_id },
        {
            where: {
                user_id: user.user_id
            }
        }
    )
    
    return user
}
const { Student,User,Department } = require('../../models')

module.exports = async (data) => {
    const user = await User.create({
        password: data.password,
        name: data.name,
        email: data.email
    })
    await Student.create({
        college: data.college,
        dept_id: data.dept_id,
        user_id: user.id
        
    })
}
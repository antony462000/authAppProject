const { Model } = require('sequelize')
const { User, Student, Department } = require('../../models')
const generate_jwt = require('./generate_jwt')
module.exports = async (data) => {
    const user = await User.findOne({
        where: {
            email: data.email, password: data.password
        },
        attributes: {
            exclude: ['updatedAt', 'createdAt', 'deletedAt', 'password']
        },
        include:
        {
            model: Student,
            as: 'student',
            attributes:["college"],
            include: {
                model: Department,
                attributes:["dept_name"],
                as: 'department'
            }
        },
    })
    console.log("=======",user)

    return generate_jwt(user)

}
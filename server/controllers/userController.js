const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, email, bio, isRemember) => {
    if(isRemember) {
        return jwt.sign(
            {id, email, bio},
            process.env.SECRET_KEY,
            {expiresIn: '60d'}
        )
    } else {
        return jwt.sign(
            {id, email, bio},
            process.env.SECRET_KEY,
            {expiresIn: '1m'}
        )
    }
}


class UserController {
    async registration(req, res, next) {
        const {email, password, bio, isRemember} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('incorrect email'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('This email is forbidden'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, bio, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.bio, isRemember)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password, isRemember} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Wrong Email or Password'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Wrong Email or Password'))
        }
        const token = generateJwt(user.id, user.email, user.bio, isRemember)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}


module.exports = new UserController()

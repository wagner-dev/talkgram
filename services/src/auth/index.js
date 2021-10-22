require('dotenv').config()
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET_JWT

export const setJwt = (payload) => {
    const token = jwt.sign(payload, SECRET, {
        expiresIn: '30d'
    })
    return token
}

export const verifyJwt = (token) => {
    
    return jwt.verify(token, SECRET, 
                     (err, result) => err ? false : result)
}
require('dotenv').config()
const jwt = require('jsonwebtoken')

const SECRET = process.env.JWT_SECRET

module.exports = { 


    setJwt(payload){
        const token = jwt.sign(payload, SECRET, {
            expiresIn: '30d'
        })
        return token
    },
    verifyJwt(token){

        return jwt.verify(token, SECRET,
                         (err, result) => err ? false : result)
    }


}

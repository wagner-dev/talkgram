const { verifyJwt } = require('../../services/auth/index')

function CheckLogin(req, res) {
    try{
        const token = req.headers?.authorization?.split(' ')[1]

        if(token){
            const validJwt = verifyJwt(token)
            
            if(validJwt) res.json({status: 200,message: 'ok', data: validJwt})
            else 
                res.status(401).json({status: 422, message: 'Não autorizado'})
        }
        else{
            res.status(401).json({status: 401, message: 'Não autorizado'})
        }
    }
    catch{
        res.status(500).json({status: 500, message: 'Ocorreu um erro'})
    }
}

module.exports = CheckLogin
const { verifyJwt } = require('../../services/src/auth/index')
export default function login(req, res) {
    try{
        if(req.method === 'POST'){
            const { token } = req.body
            if(token){
                const validJwt = verifyJwt(token)
                
                if(validJwt) res.json({status: 200,message: 'ok', data: validJwt})
                else 
                    res.status(401).json({status: 422, message: 'Não autorizado'})
            }
            else{
                res.status(422).json({status: 422, message: 'Token não informado'})
            }
        }
        else{
            res.status(404)
               .end()
        }
    }
    catch{
        res.status(500).json({status: 500, message: 'Ocorreu um erro'})
    }
}
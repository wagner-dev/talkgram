const { setJwt } = require('../../services/auth/index')

function login(req, res) {
    
    try{
        const { name, email, image } = req.body

        const dataValid = name && email && image
        
        if(dataValid){
            const data = {
                name,
                email,
                image
            }
            const token = setJwt(data)
            const tokenValid = token ? token : false
            res.json({status: 200, message: 'ok', token: tokenValid})
        }
        else{
            res.status(422)
                .json({status: 422, message: 'Dados inválidos'})
        }
    }
    catch{
        res.status(500)
           .json({status: 500, message: 'Ocorreu um erro :('})
    }
}


module.exports = login
const { setJwt } = require('../../services/src/auth/index')

export default function login(req, res) {

    try{
        if(req.method === 'POST'){
            const { name, email, image } = req.body

            const dataValid = name && email && image
            if(dataValid){
                const data = {
                    name,
                    email,
                    image
                }
                const token = setJwt(data)
                res.json({status: 200, message: 'ok', token})
            }
            else{
                res.status(422)
                   .json({status: 422, message: 'Campos inválidos'})
            }
        }
        else{
            res.status(404).end()
        }
    }
    catch{
        res.status(500)
           .json({status: 500, message: 'Ocorreu um erro :('})
    }
}
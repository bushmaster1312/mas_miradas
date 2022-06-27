const bcrypt = require("bcrypt")
const {register, login} = require('../models/login')



module.exports.loginController = async(req, res)=>{
  const {email,  password} =req.body
  
  try {
    const user = await login(email, password)
    return res.status(200).send(user)
} catch (error) {
    return res.status(500).send("hubo un error en el ingreso")
}

}

module.exports.registerController = async (req, res) =>{
  let { nombre, apellido,email, password} = req.body
  password = bcrypt.hashSync(password,10)
  try {
      const user = await register( nombre, apellido,email, password)
      return res.status(201).send(user)
  } catch (error) {
     console.log(error)
      return res.status(500).send("hubo un error en el registro")
  }

}


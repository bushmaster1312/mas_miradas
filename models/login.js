const { request } = require('../db/request')
const bcrypt = require("bcrypt")



module.exports.login = async(email,  password)=>{
const data = await request (`SELECT * FROM users WHERE email ='${email}'`)
 console.log(data)

 if(data.length === 0){
     return {
         msg:"usuario no registrado",
         error: true
     }
 }else{
     if(bcrypt.compareSync(password, data[0].password)){
         return{
             user:data[0],
             logged :true
         }
     }else{
         return {
             msg:"Usuario o contraseña incorrecta",
             error :true
         }
     }
 }
}



module.exports.register = async ( nombre, apellido, email, password) => {
    const data = await request(`SELECT * FROM users WHERE email= '${email}'`)
  
    if (data.length > 0) {
        return "el usuario ya existe"
    } else {
        const user = await request(`INSERT INTO users (nombre, apellido, email, password, type) VALUES( '${nombre}', '${apellido}', '${email}', '${password}', "Cliente" )`)

        return {
            id_users: user.insertId,
            email
        }
    }
}

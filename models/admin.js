//**** MODELOS DE CONTROLADORES DE ADMINISTRADOR ****/
const { request } = require("../db/request")

// MODELO QUE HACE UNA REQUEST   DE TODOS LOS SERVICIOS //
module.exports.allServicios = async ( )=>{
    const data = await request(`SELECT *  FROM servicios AS s 
    INNER JOIN categorias AS c
    ON s.idservicios = c.idservicios
    `)
    console.log(request)
    return{
       servicios:data
    }
}
// SELECCION DE SERVICIO POR EL ID //
module.exports.serviciosByid= async(id)=>{
const data = await request (`SELECT * FROM servicios WHERE idservicios = ${id}`)

return{
    data: data[0]
}

}

//CREACION DEL SERVICIO //

module.exports.createServicio = async ({categorias, imagen})=>{
const data =  await request (`INSERT INTO servicios (categorias, imagen)
  VALUES ('${categorias}', '${imagen}')`)
  return{
    id: data.insertID,
    msg: "servicio creado" 
  }

}


//  MODELO DE EDICION DE SERVICIOS // 

module.exports.updateServicios = async ({idservicios, categorias,imagen})=>{
 const data = await request (`  UPDATE servicios SET  idservicios= '${idservicios}', categorias='${categorias}', imagen=${imagen}`)
 
 return {

    idservicios,
    categorias,
    update: data.affectedRows ? true : false,
    msg : "updateado"
 }

}


module.exports.adminDeleteServicio = async (idservicios) =>{
 const data = await request(
    `DELETE FROM servicios
    WHERE idservicios = ${idservicios}
    `
 )
 return{
    idservicios,
    deleted : data.affectedRows ? true : false
 }


}

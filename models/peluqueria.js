const { request } = require("../db/request")



module.exports.servicios = async () => {
    const data = await request(`SELECT * FROM servicios `)
    console.log(request)
    return {
        servicios: data
    }
}


module.exports.allPeluqueria = async (nombre) => {
    const data = await request(`SELECT * FROM categorias WHERE categoria = '${nombre}'`)
    console.log(request)
    return {
        servicios:data
    }
}

module.exports.peluqeriaById = async (id) => {
    const data = await request(`SELECT * FROM categorias WHERE idcategorias = ${id}`)

    return {
        data:data[0]

    }
}

module.exports.createPeluqueria = async ({ categoria, precio, descripcion, imagencategoria }) => {
    const data = await request(`INSERT INTO categorias  (idservicios, categoria, precio, descripcion, imagencategoria)
    VALUES( 17,'${categoria}',${precio},'${descripcion}','${imagencategoria}')`)
    return {
        id: data.isertID,
        descripcion,
        msg: "creado con exito"
    }
}


module.exports.updatePeluqueria = async ({ idcategorias, idservicios, categoria, precio, descripcion,  imagencategoria }) => {
    const data = await request(`UPDATE categorias SET idservicios ='${idservicios}', categoria = '${categoria}' ,precio = ${precio},descripcion = '${descripcion}', imagencategoria = '${imagencategoria}'   WHERE idcategorias = ${idcategorias} `)   
    return {
        idcategorias,
        descripcion,
        precio,
        categoria,
        update: data.affectedRows ? true : false,
        msg: "updateado"
    }
}


module.exports.deletePeluqueria = async (id) => {
    const data = await request(`
       DELETE FROM categorias
       WHERE idcategorias = ${id}
    `)
    return {
        id,
        deleted: data.affectedRows ? true : false
    }

}
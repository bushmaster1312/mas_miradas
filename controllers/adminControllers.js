
const fs = require('fs')
const {
    allServicios,
    serviciosByid,
    createServicio,
    updateServicios } = require("../models/admin")



module.exports.allServiciosController = async (req, res) => {
    try {
        const response = await allServicios()

        return res.send(response)
    } catch (error) {
        return res.send("error")
    }
}


module.exports.adminServicioByidControllers = async (req, res) => {
    const { id } = req.params
    try {
        const admin = await serviciosByid(id)
        return res.send(admin)
    } catch (error) {
        return res.send("se produjo un error")
    }

}

// CONTROLADOR DE LA CREACION DE SERVICIO //    

module.exports.adminServiciosCreateControllers = async (req, res) => {
    const { categorias } = req.body
    const ext = req.file.mimetype.split('/', 2)[1]
    const imagen = `${req.file.filename}.${categorias}.${ext}`

    fs.renameSync(req.file.path, `imagenes/${imagen}`)
    console.log(req.file)

    try {
        const serviciocreado = await createServicio( {categorias,imagen  })
        return res.send(serviciocreado)
    } catch (error) {
        return res.send("se produjo un error")
    }

}


module.exports.adminServiciosUpdateControllers = async (req, res) => {
    const { categorias } = req.body
    const { idservicios } = req.params
    const ext = req.file.mimetype.split('/', 2)[1]
    const imagen = `${req.file.filename}.${ext}`

    fs.renameSync(req.file.path, `imagenes/${imagen}`)
    console.log(req.file)

    try {
        const serviciupdateado = await updateServicios(
            {
                idservicios,
                categorias,
                imagen
            })
        return res.send(serviciupdateado)
    } catch (error) {
        return res.send("se produjo un error")
    }

}
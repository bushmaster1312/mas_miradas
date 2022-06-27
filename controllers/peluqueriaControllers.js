
const fs = require('fs')
const path = require('path')
const {
    allPeluqueria,
    peluqeriaById,
    createPeluqueria,
    updatePeluqueria,
    deletePeluqueria,
    servicios } = require("../models/peluqueria")


module.exports.servciosControllers = async (req, res) => {
    try {
        const response = await servicios()

        return res.send(response)
    } catch (error) {
        return res.send("error")
    }
}


module.exports.allPeluqueriaControllers = async (req, res) => {
    const { nombre } = req.params
    try {
        const response = await allPeluqueria(nombre)

        return res.send(response)
    } catch (error) {
        return res.send(console.log(error))
    }
}


module.exports.peluqueriaByIdControllers = async (req, res) => {
    const { id } = req.params

    try {
        const peluqueria = await peluqeriaById(id)
        return res.send(peluqueria)
    } catch (error) {
        return res.send("se produjo un error")
    }
}

module.exports.createPeluqueriaController = async (req, res) => {
    const { idservicios, categoria, precio, descripcion } = req.body

    const ext = req.file.mimetype.split('/', 2)[1]
    const imagencategoria = `${req.file.filename}.${categoria}.${ext}`

    fs.renameSync(req.file.path, `imagenes/${imagencategoria}`)
    console.log(req.file)


    try {
        const peluqueria = await createPeluqueria({ idservicios, categoria, precio, descripcion, imagencategoria })
        return res.send(peluqueria)

    } catch (error) {
        return console.log(error)

    }
}

module.exports.updatePeluqueriaController = async (req, res) => {
    const { idcategorias } = req.params
    const { idservicios, categoria, precio, descripcion } = req.body
    const ext = req.file.mimetype.split('/', 2)[1]
    const imagencategoria = `${req.file.filename}.${categoria}.${ext}`

    fs.renameSync(req.file.path, `imagenes/${imagencategoria}`)
    console.log(req.file)

    try {
        const peluqueria = await updatePeluqueria({ idcategorias, idservicios, categoria, precio, descripcion, imagencategoria })
        return res.send(peluqueria)
    } catch (error) {
        return console.log(error)


    }
}

module.exports.deletePeluqueriaController = async (req, res) => {
    const { id } = req.params
    console.log(res.file)
   
    try {
        const peluqueria = await deletePeluqueria(id)
        return res.send(peluqueria)
    } catch (error) {
        return res.send("se produjo un error")
    }

}


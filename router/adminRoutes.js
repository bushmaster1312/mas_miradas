
const express = require("express")
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'imagenes/' })
const {
    allServiciosController,
    adminServicioByidControllers,
    adminServiciosCreateControllers, 
    adminServiciosUpdateControllers} = require("../controllers/adminControllers")


    router.use((req, res, next) => {
    const { host } = req.headers
    res.host = host
    next()
})


router.get("/", allServiciosController)
router.get('/:nombre/:id', adminServicioByidControllers)
router.post('/create', upload.single('imagen', 2), adminServiciosCreateControllers)
router.put ( "/update/:idservicios", upload.single('imagen',2),adminServiciosUpdateControllers)
module.exports = router;
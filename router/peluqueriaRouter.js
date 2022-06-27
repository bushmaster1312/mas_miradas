const express = require("express")
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'imagenes/' })
const {
    allPeluqueriaControllers,
    peluqueriaByIdControllers,
    createPeluqueriaController,
    updatePeluqueriaController,
    deletePeluqueriaController,
    servciosControllers } = require('../controllers/peluqueriaControllers')


router.use((req, res, next) => {
    const { host } = req.headers
    res.host = host
    next()
})

router.get("/", servciosControllers)
router.get('/:nombre/:id', peluqueriaByIdControllers)
router.get("/:nombre", allPeluqueriaControllers)
router.post("/", upload.single('imagencategoria', 2), createPeluqueriaController)
router.put("/:idcategorias", upload.single('imagencategoria', 2), updatePeluqueriaController)
router.delete("/:id", deletePeluqueriaController)


module.exports = router;
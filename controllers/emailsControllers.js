const { enviarEmails } = require("../functions");

module.exports.envioEmail = async (req, res) => {
    const { nombre, email, mensaje } = req.body
     try {
        const envio = await enviarEmails(nombre,email, mensaje)
        return res.send({envio})
     } catch (error) {
        return res.send({resenvio: false})
     }
};



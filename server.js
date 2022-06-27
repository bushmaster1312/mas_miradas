const express = require('express')
const peluqueriaRouter = require("./router/peluqueriaRouter")
const loginRoutes = require("./router/loginRoutes")
const adminRoutes = require("./router/adminRoutes")
const emailRouter= require( "./router/mailsRoutes")
const app =express()
const cors = require('cors')



app.use(express.static('imagenes'))
app.use(cors())
app.use(express.json())
const PORT = 4000


app.get("/",(req, res) => res.send("hola mundo "))
app.use("/servicios",peluqueriaRouter)
app.use("/admin",adminRoutes)
app.use("/login", loginRoutes)
app.use("/email", emailRouter)



app.listen(PORT, ()=> console.log(`servidor levantado en el puerto ${PORT}`))
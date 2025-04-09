const express = require("express")
const app = express()
const PORT = 3000

const mongoose = require("mongoose")

// Conectar a Mongoose
app.get("/api",(req, res)=>{
    res.send("aplicion funcionando")
})
mongoose.connect("mongodb://127.0.0.1:27017/tubasedatos", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Conexion exitosa a mongo") 
}).catch((error)=> {
    console.log("Error al conectar a Mongo:" + error)
})

    

// escuchando desde el puerto 3000
app.listen(PORT, () => {
    console.log("Servidor funcionando por el puerto "+ PORT)
})


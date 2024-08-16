const express = require('express')
const dbConnection = require('../database/config')
require('dotenv').config()
const {getProduct, postProduct,putProduct,deleteProduct} = require ('../controllers/productController')

class Server{
    //el constructor instancia una clase
    //si es un metodo tiene parentesis y atributo no
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathProduct = '/api/Product'//indica una ruta publica de una api 
        this.route()
    }

    async dbConnection(){//espera a que haya una respuesta
        await dbConnection()
    }

    route(){
        this.app.use(express.json())//Emplear json al req body
        this.app.get(this.pathProduct, getProduct)//call to controller
        this.app.post(this.pathProduct, postProduct)
        this.app.put(this.pathProduct,putProduct)
        this.app.delete(this.pathProduct+'/:id', deleteProduct) //call to controller for delete vehicle by id  //:id representa un parametro dinamico en la url que se enviara por get o post en el request body
    }

    listen(){
        //variable de entorno o global, verifica si el servidor esta corriendo
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port:${process.env.PORT}`);
            
        })
    }
}

module.exports = Server //Export the class Server
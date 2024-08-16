const mongoose = require('mongoose')//paquete o dependecia que nos permite llamar

const dbConnection = async()=>{
    //capturar los errores
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connected to Mongo DB')
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = dbConnection
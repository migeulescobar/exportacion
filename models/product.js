const {model, Schema} = require('mongoose')

const ProductSchema = new Schema({
    nameProduct: {
        type: String,
        required:[true, 'The field name is required'],
    },
    price: {
        type: Number,
        required:[true, 'The field price is required'],
    },
    weight: {
        type: Number,
        required:[true, 'The field model is required'],
    }
})

module.exports = model('Product',ProductSchema,'product')//primero define la clase, el segundo al nombre de la esquema, tercero nombre de la collection
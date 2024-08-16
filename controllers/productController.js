const Product = require('../models/product')

//Get all documents from Vehicle
const getProduct = async(req, res)=>{
    const products = await Product.find()
    res.json(products)
}

//Post Create a document in the collection Vehicle
const postProduct = async(req, res)=>{
    const body = req.body //Get the body send from postman or a form
    let msg = 'Product inserted succesful'
    try {
        const product = new Product(body)//create the object Vehicle in RAM
        await product.save()//insert object at the collection 
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

const putProduct = async(req,res)=>{
    const {nameProduct,price,weight} = req.body //Destructuring
    let msg = 'Product update succesful'
    try {
        await Product.findOneAndUpdate({nameProduct:nameProduct},{price:price, weight:weight})
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

const deleteProduct = async(req,res)=>{
    //por _id
    const _id=req.params.id
    try{
        await Product.findByIdAndDelete({_id:_id})
        res.json({msg: 'product deleted'})
    }
    catch(error){
        res.status(500).json(error,{msg: 'there was a problem deleting the product'})
    }
}

module.exports = {
    getProduct, postProduct, putProduct, deleteProduct
}
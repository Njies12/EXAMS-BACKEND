const mongoose=require('mongoose')
const serviceSchema= mongoose.Schema({
    logo:String,
    title:String,
    description:String
})
module.exports =mongoose.model('Service', serviceSchema)
        


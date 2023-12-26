const mongoose=require("mongoose")
const recipeSchema=new mongoose.Schema({
    img:String,
   name:String,
   description:String,
   price:Number,
   colour:String,
   qty:Number,
   flavour:String,
   comments: [{
    text: String,
    username: String,
    date: { type: Date, default: Date.now } }],
   createdBy:[{type:mongoose.Types.ObjectId,ref:"user"}],
})

const recipe = mongoose.model('recipe',recipeSchema)

module.exports = recipe
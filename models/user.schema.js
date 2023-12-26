const  mongoose= require("mongoose");

const usersachema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    role : {type : String,default : "admin"}
})

const user = mongoose.model('user',usersachema)

module.exports = user
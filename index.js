const express = require('express')
const cookie = require('cookie-parser')
const connection = require('./config/db')
const { router } = require('./routes/user.route')
const {recipe}=require("./routes/recipe.route")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())

app.set('view engine','ejs') 
app.set('views',__dirname+'/view') 
app.use(express.static(__dirname + '/public')) 

app.use('/user',router)
app.use('/recipe',recipe)

app.get("/",(req, res)=>{
    res.render("recipeList")
})
app.listen(8090,()=>{
    console.log('server running on 8090');
    connection()
})




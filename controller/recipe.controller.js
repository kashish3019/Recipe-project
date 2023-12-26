const recipe = require("../models/recipe.schema");
const user = require("../models/user.schema");

const recipeList=async(req,res)=>{
    try{
        let data=await recipe.find()
        res.send(data)
    }
    catch(err){
        res.status(404).send({err:err.message})
    }
}

const recipeForm=(req,res)=>{
    res.render("recipeForm")
}

const recipedata=async(req,res)=>{
    const {img,name,description,price,colour,qty,flavour}=req.body;
    try{
        let data=await recipe.create({img,name,description,price,colour,qty,flavour})
       res.send(data);
    }
    catch(err){
        res.send({error:"Invalid data"})
    }
}   


const myrecipe=async(req,res)=>{
    try {
        let data = await recipe.find();
        res.render("myrecipe", { recipes: data }); // Pass the 'data' to the EJS file
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

const recipeDelete= async(req,res)=>{
    try {
        let {id} = req.params;
       let data = await recipe.findByIdAndDelete(id);
       res.send("deleted")
    } catch (error) {
        return res.send({Error : error.message});
    }
}

const recipeupdate = async (req, res) => {
    try {
        let {id} = req.params;
        let data = await recipe.findById(id)
        res.render('taskform',{data, edit:true});
    } catch (error) {
        return res.send({Error : error.message});
    }
}

const recipeup = async(req,res)=>{
    try {
        
        let {id} = req.params;
        let data= await recipe.findByIdAndUpdate(id,req.body)
        res.send(data)
        
    } catch (error) {
        return res.send({Error : error.message});
    }
}

const comment = async(req,res)=>{
    try {
        let {id} = req.cookies
        let blogid = req.params.id
        
        const name = await user.findById(id)
        const blogdata = await recipe.findById(blogid)
        
        let result = {
            text:req.body.text,
            username:name.username
        }
        blogdata.comments.push(result)
        await blogdata.save()

        return res.send(blogdata)
    } catch (error) {
        res.send({error:error})
    }
}

module.exports = {recipeList,recipedata,recipeForm,myrecipe,recipeDelete,recipeupdate,recipeup,comment}
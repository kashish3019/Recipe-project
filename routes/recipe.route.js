const { Router } = require('express')
const { recipeList, recipeForm, recipedata, recipeDelete, recipeupdate, recipeup, comment, myrecipepage, recipeuser } = require('../controller/recipe.controller');
const isAdmin = require('../middlewere/isadmin');
const { userauth } = require('../middlewere/userauth');
const verifyToken = require('../middlewere/auth');

const recipe = Router()
recipe.get("/", recipeList);
recipe.get("/recipeForm", isAdmin,recipeForm);
recipe.get("/myrecipepage", isAdmin,myrecipepage );
recipe.get("/myrecipe",isAdmin,recipeuser);
recipe.get("/recipeupdate/:id",recipeupdate);

recipe.post("/recipeForm",verifyToken, recipedata)
recipe.delete("/recipedelete/:id",isAdmin,recipeDelete);
recipe.patch("/recipeupdate/:id",recipeup);
recipe.patch('/comment/:id',userauth,comment)

module.exports = { recipe }
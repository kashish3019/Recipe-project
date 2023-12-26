const { Router } = require('express')
const { recipeList, recipeForm, recipedata,  myrecipe, recipeDelete, recipeupdate, recipeup, comment } = require('../controller/recipe.controller');
const isAdmin = require('../middlewere/isadmin');
const { userauth } = require('../middlewere/userauth');

const recipe = Router()
recipe.get("/", recipeList);
recipe.get("/recipeForm", isAdmin,recipeForm);
recipe.get("/myrecipe",isAdmin,myrecipe)
recipe.get("/recipeupdate/:id",recipeupdate);

recipe.post("/recipeForm", recipedata)
recipe.delete("/recipedelete/:id",isAdmin,recipeDelete);
recipe.patch("/recipeupdate/:id",recipeup);
recipe.patch('/comment/:id',userauth,comment)

module.exports = { recipe }
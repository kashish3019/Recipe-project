const userauth = (req,res,next)=>{
    const {id} = req.cookies
    
    if(id){
        next()
    }
    else{
        res.send('login or signup first')
    }
}
module.exports = {userauth}
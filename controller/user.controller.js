const user = require("../models/user.schema")
const bcrypt =require("bcrypt")
const jwt=require("jsonwebtoken")

const getsignup = (req,res)=>{
    res.render('register')
}

const getlogin = (req,res)=>{
    res.render('login')
}

const signup = async (req, res) => {
    let { email, password, username, role } = req.body;
    if (!role) {
        role = 'user';
    }
    const existingUser = await user.findOne({ username });

    if (existingUser) {
        return res.status(400).send({ msg: "user already exists" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
            res.status(500).send({ msg: "Error" });
        } else {
            let obj = {
                email,
                password: hash,
                username,
                role,
            };
            let data = await user.create(obj);
            let token = jwt.sign({ id: data._id, role: data.role }, "token");
            res.cookie("token", token).send({ msg: "User Signup", val: data });
        }
    });
};


const login = async(req,res)=>{
    const { email, password } = req.body;
    let data = await user.findOne({ email });
    if (data) {
        bcrypt.compare(password, data.password, (err, result) => {
            if (result) {
                let token = jwt.sign({ id: data._id, role: data.role }, "token");
                res.cookie("token", token).send({ msg: "User login successfully" });
            } else {
                res.send({ msg: "Password incorrect" });
            }
        });
    } else {
        res.send({ msg: "User not registered" });
    }
}

module.exports = {signup,getsignup,getlogin,login}



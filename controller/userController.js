const {loginInteractor, signupInteractor, getUserInfoInteractor} = require("../interactors/userInteractorFunctions");
const jwt = require("jsonwebtoken");


exports.userSignup = async (req,res)=>{
    try {
        const {username,password,name} = req.body;
        const savedData = await signupInteractor(name,username,password);
        return res.status(201).json({
            userAdded : true ,
            message : "User Signup Successful",
            data : savedData
        });
    }catch (e) {
        return res.status(500).send(e);
    }
}

exports.userLogin = async (req,res)=>{
    try{
        const {username , password} = req.body;
        const data = await loginInteractor(username,password);
        if(data === "WRONG_PASSWORD" || data === "NOT_FOUND")
            return res.status(400).send(data); // To Make responses more proper
        const token = await jwt.sign({
            userID : data._id,
            ROLE : "user"
        },process.env.JWT_KEY,{
            expiresIn: "48h"
        });
        return res.status(200).header({
            Authorization : token
        }).json({
            userLoggedIn : true ,
            message : "user logged In",
            code : "USER_LOGGED_IN"
        });
    }catch (e) {
        // return proper response from here.
        return res.status(500).send(e);
    }
}
exports.getAllUsers = async (req,res)=>{
    try{
        const data = await getUserInfoInteractor();
        return res.status(200).json(data);
    }catch (e) {
        return res.status(500).send(e);
    }
}

exports.userPasswordUpdate = async (req,res)=>{
    try{

    }catch (e) {
        return res.status(500).send(e);
    }
}

exports.userDeleteAccount = async (req,res)=>{
    try{

    }catch (e) {
        return res.status(500).send(e);
    }
}

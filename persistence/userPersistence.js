const userDatabase = require("../model/userModel");

exports.userSignupPersistence = async (name,username ,password)=>{
    try {
        const savedData = await userDatabase.create({name,username,password});
        return savedData;
    }catch (e) {
        throw new Error(e);
    }
}
exports.userLoginPersistence = async (username)=>{
    try{
        const data = await userDatabase.findOne({username : username});
        return data;
    }catch (e) {
        throw new Error(e);
    }
}
exports.getUserInfoPersistence = async ()=>{
    try{
        const data = await userDatabase.find({});
        return data;
    }catch (e) {
        throw new Error(e);
    }
}

exports.updateUserPassword = async (username , password)=>{
    try{

    }catch (e) {
        throw new Error(e);
    }
}
exports.deleteUserPersistence = async (username)

const bcrypt = require("bcrypt");
const {userLoginPersistence, userSignupPersistence,getUserInfoPersistence} = require("../persistence/userPersistence");


exports.signupInteractor = async (name,username,password)=>{
    try{
        const savedUserData = await userSignupPersistence(name,username,password);
        return savedUserData;
    }catch (e) {
        throw new Error(e);
    }
}

exports.loginInteractor = async (username,password) =>{
    try{
        const userData = await userLoginPersistence(username);
        if(!userData){
            return "NOT_FOUND";
        }
        const passwordCheck = await bcrypt.compare(password,userData.password);
        if(!passwordCheck){
            return "WRONG_PASSWORD";
        }
        return userData;
    }catch (e) {
        throw new Error(e);
    }
}

exports.getUserInfoInteractor = async ()=>{
    try{
        const usersData = await getUserInfoPersistence();
        const finalData = [];
        usersData.forEach(val =>{
           const {name , username} = val;
           finalData.push({name,username});
        });
        return finalData;
    }catch (e) {
        throw new Error(e);
    }
}

exports.updateUserPassword = async ()=>{
    try{

    }catch (e) {
        throw new Error(e);
    }
}

exports.deleteUserInformation = async ()=>{

}

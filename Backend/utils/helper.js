const bycrypt = require("bcrypt")


const hashedpassWord = async (password)=>{
    console.log(password,"password")
    const saltRounds = 10;
    const encryptpassword = await bycrypt.hash(password,saltRounds,)
    return encryptpassword
}

Module.exports = hashedpassWord
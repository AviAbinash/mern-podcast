const bycrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const hashedpassWord = async (password)=>{
    console.log(password,"password")
    const saltRounds = 10;
    const encryptpassword = await bycrypt.hash(password,saltRounds,)
    return encryptpassword
}

const isPasswordMatched = async(password,hasPassword)=>{
   const isMatch = await bycrypt.compare(password,hasPassword)
   console.log(isMatch,"isMatch>>>>>>>>>>>>>");
   return isPasswordMatched
}

const getLoginToken = async(_id,email)=>{
     const loginToken = await jwt.sign(
       { id: _id, email:email },
       process.env.JWT_PRIVATE_KEY,
       { expiresIn: "1d" }
     );
     return loginToken;
}


const verifyToken = async(token)=>{
    const user = await jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    return user
}
module.exports = {
  hashedpassWord,
  isPasswordMatched,
  getLoginToken,
  verifyToken,
};
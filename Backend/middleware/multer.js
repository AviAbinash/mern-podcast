const multer = require("multer")


const storage = multer.diskStorage({
    destination : (req,file,callBack)=>{
       callBack(null,"uploads/") 
    },
    fileName:(req,file,callBack)=>{
      callBack(null, `${Date.now()}-${file.originalname}`)
    }

})

const upload = multer({
  storage: storage,
}).fields(
  { name: "frontImage", maxCount: 1 },
  { name: "audioFile", maxCount: 1 }
);

module.exports = upload
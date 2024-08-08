require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();
const cors = require("cors");
const PORT = 8080;
app.use(cors());

const connetToDb = require("./connections/connection");
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.status(200).send("welcome to backend");
});

const userApi = require("./routes/userRouter");
const categoryApi = require("./routes/categoryRouter");
app.use("/userAuth/v1", userApi);
app.use("/api/v1", categoryApi);
connetToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
  });
});

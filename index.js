const express = require("express");
const userRouter = require("./routes/userRoute");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api/v1/user",userRouter);


const PORT = 8000 || process.env.PORT;
app.listen(PORT, ()=>console.log("Server Started"));
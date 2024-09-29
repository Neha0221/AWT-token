const express=require("express");
const app=express();  /* sever application */
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://neha:nSAlTNTVWme9s1QI@cluster0.mwiyepg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connection establish");
})
.catch((error)=>{
    console.log(error);
})

app.use("/user",userRouter);
app.use("/note",noteRouter);

app.get("/",(req,res)=>{
    res.send("Hello");
});

// KleyPgFq2PvzqksV
app.listen(5000,()=>{
    console.log("Server start at 5000");
});


 
const express=require("express");
const path=require("path");
const app=express();
const port=8080;
 
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname,"/public/js")));
// app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>
{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>
{
    res.send("hello");
});


app.get("/ig/:username",(req,res)=>
{
    const instadata=require("./data.json");
    
   let {username} =req.params;
   let data=instadata[username];
   res.render("instagram.ejs",{data});
});


app.get("/rolldice",(req,res)=>
{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num});
});
app.listen(port,()=>{
 console.log(`listening on port ${port}`);
});
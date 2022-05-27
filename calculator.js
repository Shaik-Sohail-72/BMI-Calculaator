const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
// app.get("/",function(req,res)
// {
//     res.sendFile(__dirname+"/index.html");
// });
// app.post("/",function(req,res)
// {
//     var n1=Number(req.body.num1);
//     var n2=Number(req.body.num2);
//     var r=Number(n1+n2);
//     res.send("The addition is "+ r);
// });
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/",function(req,res)
{
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    var r1=Math.round(Number(weight/(height*height)));
    res.send("Your BMI is "+ r1);
    
});
app.listen(3000,function()
{
    console.log("server started!");
});

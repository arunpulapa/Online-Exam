var express=require("express");
var app=express();

var path=require("path");
app.use(express.static(path.join(__dirname,'dist/OnlineExam')))






app.listen(process.env.PORT || 5000,()=>{console.log("server listning on port 7777")})
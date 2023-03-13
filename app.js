var express= require("express")
var app = express();
app.engine('html', require('ejs').renderFile); 
app.use('/assets' , express.static('assets'))


app.get("/index.html" ,function(_req,res){
    res.render(__dirname + '/index.html')
}) 
app.get('/About.html', function(_req,res){
    res.render(__dirname + '/About.html')
})
app.get("/Maldives.html" ,function(_req,res){
    res.render(__dirname + '/Maldives.html')
})
app.get("/Singapore.html" ,function(_req,res){
    res.render(__dirname + '/Singapore.html')
})
app.listen("8000" ,()=>{
    console.log("Successfully run on server")
})
 
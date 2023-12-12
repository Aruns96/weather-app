const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json({extended:false}));
app.use(express.static(__dirname + '/public'));

app.use("/getWeather",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
});



app.listen(3000);


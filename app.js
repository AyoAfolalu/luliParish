var express = require("express");
var app = express();


//==================================================
//ROUTES
//==================================================
app.get("/",function(req,res)
{
		res.send("Hi there");
		
		});


app.listen(process.env.PORT || 3000, process.env.IP, () =>{
	console.log('Server has started');
});
	
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");


//==================================================
//ROUTES
//==================================================
app.get("/",function(req,res)
{
		res.render("home");
		});

app.get("/about",function(req,res)
{
		res.render("aboutus");
		});

app.get("/tenet",function(req,res)
{
		res.render("tenet");
		});

app.get("/biblelessons",function(req,res)
{
		res.render("biblelessons");
		});

app.get("/gallery",function(req,res)
{
		res.render("gallery");
		});

app.get("/contact",function(req,res)
{
		res.render("contact");
		});

app.get("/*",function(req,res)
{
		res.render("home");
		});


app.listen(process.env.PORT || 3000, process.env.IP, () =>{
	console.log('Serv3r has started');
});
	
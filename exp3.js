var http=require('http');
var express=require('express');
var mysql=require('mysql');
var session=require("express-session");
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.get('/',function(req,res)
{
console.log("got a GET request for homepage");
//res.send('hello home');
res.sendFile( __dirname  + '/home.html' );  
});
app.get('/shop',function(req,res)

{
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/shop.html');
});
// app.post('/login',function(req,res)

// // {
// // 	console.log("got a request for prescription page");
// // 	res.sendFile(__dirname  + '/loginform.html');
// });


app.get('/signup',function(req,res)

{-
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/signup.html');
});
app.get('/All',function(req,res)

{
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/all.html');
});

app.get('/francise',function(req,res)

{
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/francise.html');
});

app.get('/prescription',function(req,res)

{
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/prescription.html');
});

app.get('/about',function(req,res)

{
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/about.html');
});
app.get('/product',function(req,res)
{
	console.log("got a request for Dabur.html");
	res.sendFile(__dirname + '/product.html');
});

app.get('/checkoutform',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/checkoutform.html');
});

app.get('/r1',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/r1.html');
});
						 
app.get('/checkoutform1',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/checkoutform1.html');
});

app.get('/order',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/order.html');
});
app.get('/diabetic',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/diabetic.html');
});
app.get('/liver',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/liver.html');
});
app.get('/stomach',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/stomach.html');
});
app.get('/contact',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/contact.html');
});

app.get('/privacy',function(req,res)
{
	console.log("got a request for checkout.html");
	res.sendFile(__dirname + '/privacy.html');
});

var con=mysql.createConnection(
{
	host:"localhost",
	user:"root",
	password:"",
	database:"login"

});
con.connect(function(err)
{
	if (err) throw err;
	console.log("connected");
});

app.get('/',function(req,res)
{
console.log("got a GET request for homepage");
//res.send('hello home');
res.sendFile( __dirname  + '/signup.html' );  
});

app.post('/ram', function(req, res)
{	
	
		 console.log(req.body.username);
		
var sql= "insert into shop values('"+req.body.username+"','"+req.body.email+"','"+req.body.password+"')";
 con.query(sql,function(err)
 {
 				if (err) throw err;

				 	console.log("successfully Inserted");
 					 res.sendFile(__dirname  + '/loginform.html');
				
 			});
			
});			

app.use(session({
	secret:'secret',
	resave:true,
	saveUninitialized:true

}));


app.get('/shop',function(req,res)

{
	console.log("got a request for prescription page");
	res.sendFile(__dirname  + '/shop.html');
});


app.post("/chal",function(req,res){
var email =req.body.email;
var password=req.body.password;
if(email && password){
	con.query('SELECT * FROM shop where email=? AND password=?',[email,password],function(err,result){
		if(result.length>0){
			req.session.loggedin=true;
			req.session.email=email;
			res.sendFile(__dirname  + '/shop.html');
		}else{
			res.send("incorrect  password");
		};
	} )
}else{
	res.send("please fill input ");
}
});

//app.post('/check', function(req, res)
//{	
	
	//	 console.log(req.body.username);
		
//var sql= "insert into check values('"+req.body.firstname+"','"+req.body.email+"','"+req.body.address+"')";
 //con.query(sql,function(err)
 //{
 	//			if (err) throw err;

		//		 	console.log("successfully Inserted");
			//		res.send("<b>your order is valuable for us we will contact you soon</b>" );
 					 
				
 			//});
			
//});			

app.post('/feed', function(req, res)
{	
	
		 console.log(req.body.username);
		
var sql= "insert into feed values('"+req.body.name+"','"+req.body.email+"','"+req.body.number+"','"+req.body.txt+"')";
 con.query(sql,function(err)
 {
 				if (err) throw err;

				 	console.log("successfully Inserted");
					res.send("<b>your feedback is valuable for us we will contact you soon</b>" );
 					 
				
 			});
			
});			










var server=app.listen(3010,function()
{
    console.log('server started');
});
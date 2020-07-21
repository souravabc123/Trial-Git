var request= require("request");
var express= require("express");
var app= express();
app.set("view engine", "ejs");
app.get("/search",function(req,res)
{
    res.render("search");
});
app.get("/results",function(req,res)
{
    var searchResult=req.query.search;
    var url="http://www.omdbapi.com/?s="+searchResult+"&apikey=thewdb";
    request(url,function(error,response,body){ 
        if(!error && response.statusCode==200)
        {
            var data=JSON.parse(body);
            res.render("result",{data:data})
        }
    });
});

app.listen(3000,function()
{
    console.log("Serving to port 3000");
});


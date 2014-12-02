var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var articles = [];


app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine", 'ejs');


app.get('/',function(req, res){
  res.render("articles/index")
})

app.get('/articles',function(req, res){
  res.render("articles/articles", {articles: articles})
})

app.get('/articles/new',function(req, res){
  res.render("articles/new")
})

app.post('/articles',function(req, res){
  articles.push(req.body);
  res.send("Thank you for submitting your article");

})

app.get('/articles/:id',function(req, res){
    var index = req.params.id
    var myArticle = articles[index]
    res.render("articles/show", myArticle);


})

app.listen(3000);

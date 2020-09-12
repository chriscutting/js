const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>I am words</h1>");
});

app.get("/contactFake", function(req, res){
  res.send("<h3>get a hold of me on my phone!</h3>");
});

app.get("/aboutFake", function(req, res){
  res.send("<h2>This is a third path i made!</h2>")
})

app.get("/nodemon", function(req,res){
  res.send("<p> this is to see if my automatic saving package works!</p>");

});


app.listen(3000, function(){
  console.log("Server started on port 3000!");
});

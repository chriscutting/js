const express = require("express");
const app = express();
const https = require("https");


app.get("/", function(req, res){


  const url = "https://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=0ce1808de842eb2cc4472294444c7137";


  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
    const weatherdata = JSON.parse(data);
    console.log(weatherdata);

    const description = weatherdata.weather[0].description;
    const temp = (weatherdata.main.temp - 273.15) * (9/5) + 32;
    const tempFixed = temp.toPrecision(4);
    const icon = weatherdata.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<h1>it is " + tempFixed + " degrees outside farenheit</h1>");
      res.write("<h3>it feels like " + description + " today</h3>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });



});










app.listen(3000, function(){
  console.log("Server is spun up on port 3000");
});

const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 8000;

// serve the static files
const publicDirPath = path.join(__dirname,'../public');
app.use(express.static(publicDirPath));

// register the partials
const partialsDirPath = path.join(__dirname,'../template/partials');
hbs.registerPartials(partialsDirPath);

// set view engine and view dir
app.set('view engine','hbs');
const viewsDirPath = path.join(__dirname,'../template/views');
app.set('views',viewsDirPath);

app.get("/",(req,res) => {
    res.render('index');
});

app.get("/weather",(req,res) => {
    res.render('weather');
});

app.get("/about",(req,res) => {
    res.render('about');
});

app.get('*',(req,res) => {
    res.render('404error');
});

app.listen(port,(err) => {
    if(err) console.log(err);
    console.log("Listening at port "+port);
});
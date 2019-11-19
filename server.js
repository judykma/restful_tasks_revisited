const express = require('express'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restful_task_DB', {useNewUrlParser: true});

//CONFIG
app.use(bodyParser.urlencoded({extended: true})); 
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + "/public/dist/public"));
// app.use(express.static(__dirname + "/public/static"));
// app.set('views', path.join(_dirname, './public/views'));
app.set('view engine', 'ejs');

// var Task = mongoose.model('Task', TaskSchema);

//ROUTES
require('./server/config/routes.js')(app);

app.listen(8000, () => {
    console.log("♡♡♡ listening on port 8000 ♡♡♡")
});

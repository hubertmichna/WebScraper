var express = require("express"),
    fs = require("fs"),
    request = require("request"),
    cheerio = require('cheerio')
var app = express();


app.use(function(req, res, next) {
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});

app.use(express.static(__dirname + '/css'));


app.get('/', function (req, res) {
    res.sendFile("index.html", {root: __dirname});
});

app.get('/index.js', function (req, res) {
    res.sendFile("index.js", {root: __dirname});
});
var json = [];

app.post('/', function (req, res) {
    var url = req.body;
    request(url, function (error, response, html) {
        if (!error) {
            json = [];
            var imgSrc;
            var $ = cheerio.load(html);

            $('img').filter(function () {
                var data = $(this);
                imgSrc = data.attr("src");
                json.push(imgSrc);
            });
            res.send(JSON.stringify(json));
        }

    });
})


app.listen(8080, function () {
    console.log("Listening on 8080");
});
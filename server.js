console.log("server is starting");

//some databse
var words = {
    "flowers" : 5,
    "unicorn" : 4,
    "doom" : -3,
    "death" : -5,
}

var express = require('express');

//apparently express is just a constructor function
var app = express();

//listens at port 3000
var server = app.listen(3000,listening);

function listening() {
    console.log("listening....")
}

//hosts the folder and its contents
app.use(express.static('website'));

//basic routing 
var reply;
app.get('/search/:word', function(req,res){
    var word = req.params.word;
    if(words[word])
    {
        reply = {
            "status" : "found",
            "word" : word,
            "score" : words[word] 
        }
    }
    else
    {
         reply = {
            "status" : "not found",
            "word" : word 
        }
    }
    res.send(reply);
});

app.get('/add/:word/:score',function(req,res){
    var word = req.params.word;
    var score = req.params.score;

    //adding it to our so called db
    words[word] = score;

    reply = {
        "msg" : "word and score added to DB"
    }

    res.send(reply);

});


//prints entire db
app.get('/all',function(req,res){
    res.send(words);
});

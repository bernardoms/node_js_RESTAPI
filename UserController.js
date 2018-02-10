var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
var User = require('./User');
module.exports = router;

//REST requisitions 

//Creates new USER with POST 
router.post('/',function(req,res){
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
    function(err,user){
        if(err){
            return res.status(500).send("There was a problem adding the information to db");
        }
        return res.status(200).send(user);
    });
});

// RETURNS ALL THE USERS IN THE DATABASE using get
router.get('/', function (req, res) {
    User.find({}, function (err, user) {
        if (err){
            return res.status(500).send("There was a problem finding the users.");
        }
        res.status(200).send(user);
    });
});
// Returns ONE USER USING GET by Name and password
router.get('/:name/:password',function(req,res){
    User.find( {"name" : req.params.name, "password": req.params.password}, function(err,user){
        console.log( req.params.name);
        if(err){
            return res.status(500).send("There was a problem finding the users.")
        }    
        res.status(200).send(user);

    });
});
router.delete(":/id",function(req,res){
    User.findByIdAndRemove({"id": req.params.id},function(req,user){
        if(err){
            return res.status(500).send("There was a problem removing the user.")
        }
        res.status(200).send("User" + user.name + "is removed");
    });
});
module.exports = router;
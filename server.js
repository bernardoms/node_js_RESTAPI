var app = require("./app");
var port = process.env.PORT || 3000;  //Defines server port
var server = app.listen(port,function(){  //seting the listening for port 3000;
    console.log("Server is listening on port " + port); 
});

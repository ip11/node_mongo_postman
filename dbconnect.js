const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/node-crud-postman', function(err){
    if(err){
        throw err;
    }
    console.log("Database connected");
});
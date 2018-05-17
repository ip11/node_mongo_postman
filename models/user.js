const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
        type:String
    },
    email : {
        type : String
    }
});

module.exports = mongoose.model('User',userSchema);
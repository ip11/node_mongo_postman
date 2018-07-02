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

module.exports = mongoose.model('User',userSchema, 'newusers');


//var dataSchema = new Schema({..}, { collection: 'data' })., The third parameter is the name of collection, first parameter is schemaname

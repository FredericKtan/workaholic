var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    text : {
        type : String,
    },
    createAt : {
        type : Date,
        default : Date.now
    },
    editedAt : {
        type : Date,
        default : null
    }
});

module.exports = mongoose.model('Messages', MessageSchema);
module.exports = function(app){
    var message = require('../controllers/messageController');

    //Create a new language
    app.route('/api/message')
        .get(message.readAll)
        .post(message.create)
    ;
    //GET / PUT / DELETE by Id
 /*   app.route('/api/message/:messageId')
        .get(message.read)
        .put(message.update)
        .delete(message.delete)
    ;
    */
}
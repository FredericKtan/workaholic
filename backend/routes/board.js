module.exports = function(app) {
  var board = require('../controllers/board');

  app.route('/board')
    .post(board.create)
  ;

  app.route('/board/:id')
    .get(board.read)
    .put(board.update)
    .delete(board.delete)
  ;
}
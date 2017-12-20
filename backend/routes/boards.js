module.exports = function(app) {
  var boards = require('../controllers/boards');

  app.route('/boards')
    .get(boards.read)
  ;
}
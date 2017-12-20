var mongoose = require('mongoose');
var Board = mongoose.model('Board');

exports.read = (req, res) => {
  Board.find({}, (err, boards) => {
    if (err) {
      res.send(err);
    }
    res.json(boards);
  });
};

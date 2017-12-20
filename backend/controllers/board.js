var mongoose = require('mongoose');
var Board = mongoose.model('Board');

exports.create = (req, res) => {
  var newBoard = new Board(req.body);

  newBoard.save((err, board) => {
    if (err) {
      res.send(err);
    }
    res.json(board);
  });
};

exports.read = (req, res) => {
  Board.findById(req.params.id, (err, board) => {
    if (err) {
      res.send(err);
    }
    res.json(board);
  });
};

exports.update = (req, res) => {
  Board.findOneAndUpdate({ _id: req.params.id }, req.body, { updatedAt: Date.now }, (err, board) => {
    if (err) {
      res.send(err);
    }
    res.json(board);
  });
};

exports.delete = (req, res) => {
  Board.remove({
    _id: req.params.id
  }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Board successfully deleted !' });
  });
};

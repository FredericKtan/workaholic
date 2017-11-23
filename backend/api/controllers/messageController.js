var mongoose = require('mongoose');
var Message = mongoose.model('Messages');

//GET ALL Messages
exports.readAll = function(req, res){
    Message.find({})
      .catch((err) => {
        res.status(500).send({message : "Some error occured while retrieving messages."});
      })
      .then((messages) =>{
        res.status(200).send(messages);
      });
    console.log("API called GET : Message / GET ALL");
}

//GET By ID : Message
exports.read = function(req, res){
    if(!req.params.messageId){
        res.status(400).send({message : "messageId can not be empty"});
    }    
    Message.findById(req.params.messageId)
      .catch((err) =>{
        res.status(500).send({message : "Could not retrieve message with id "+req.params.messageId});
      })
      .then((message) =>{
        res.status(200).send(message);
      });
    console.log("API called GET : Message / GET by ID");
};

//POST new Message
exports.create = function(req, res){
    if(!req.body.text){
      res.status(400).send({message : "text can not be empty"});
    }    
    var newMessage = new Message(req.body);
    newMessage.save((err, message) =>{
      if(err){
        res.status(500).send({message : "Some error occurred while creating the message"});
      }
      res.status(200).send(message);
    });
    console.log("API called PUT : Message / PUT");
};

//PUT by ID : update the language
exports.update = function(req, res){
    if(!req.params.messageId){
        res.status(400).send({message : "messageId can not be empty"});
    }     
    if(!req.body.text){
      res.status(401).send({message : "language can not be empty"});
    }        
    Message.findOneAndUpdate({ _id : req.params.messageId}, {
        text : req.body.text,
        editedAt : Date.now()
    }, {new : true})
    .catch((err) =>{
      res.status(500).send({message: "Could not update Message with id " + req.params.messageId});
    })
    .then((message) =>{
      res.status(200).send(message);
    });
    console.log("API called POST : Message / POST");
}

//DELETE by ID : delete the message
exports.delete = function(req, res){
    if(!req.params.messageId){
        res.status(400).send({message : "messageId can not be empty"});
    }     
    Message.remove({ _id : res.params.messageId})
    .catch((err) =>{
      res.status(500).send({message: "Could not update Message with id " + req.params.messageId}); 
    })
    .then(() =>{
      res.status(200).send({message: 'This Message is deleted'});
    });
    console.log("API called DELETE : Message / DELETE");
  }
  
var express = require('express');
var Message = require('./models/message');

// Get the router
var router = express.Router();

// Middleware for all this routers requests
router.use((req, res, next) => {
  console.log('Request Received: ', dateDisplayed(Date.now()));
  next();
});

// Welcome message for a GET
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the REST API' });
});

// MESSAGES
router.route('/messages')
    // GET all messages
    .get((req, res) => {
        Message.find((err, messages) => {
            if (err) res.send(err);
            res.json(messages);
        });
    })
// Create a message
    .post((req, res) => {
        var message = new Message();
        message.text = req.body.text;
      	message.user = req.body.user;
        message.save(err => {
            if (err) res.send(err);
            res.json({ message: 'Message created successfully!' });
        });
    });

// MESSAGES/:message_id
router.route('/messages/:message_id')
    // GET message with id
    .get((req, res) => {
        Message.findById(req.params.message_id, (err, message) => {
            if (err) res.send(err);
            res.json(message);
        });
    })
    // Update message with id
    .put((req, res) => {
        Message.findById(req.params.message_id, (err, message) => {
            if (err) res.send(err);
	          message.text = req.body.text;
            message.save(err => {
                if (err) res.send(err);
                res.json({ message: 'Message successfully updated!' });
            });
        });
    })
    // Delete message with id
    .delete((req, res) => {
        Message.remove({_id: req.params.message_id}, (err, message) => {
            if (err) res.send(err);
            res.json({ message: 'Successfully deleted message!' });
        });
    });

function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1
      + '/' + date.getDate()
      + '/' + date.getFullYear()
      + ' ' + date.getHours()
      + ':' + date.getMinutes()
      + ':' + date.getSeconds());
}

module.exports = router;

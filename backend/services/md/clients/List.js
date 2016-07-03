var Client = require('./model');

function List(req, res) {
    Client.find((err, messages) => {
        if (err) res.send(err);
        res.json(messages);
    });
}

module.exports = List;

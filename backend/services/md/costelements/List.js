var CostElement = require('./model');

function List(req, res) {
    CostElement.find((err, messages) => {
        if (err) res.send(err);
        res.json(messages);
    });
}

module.exports = List;

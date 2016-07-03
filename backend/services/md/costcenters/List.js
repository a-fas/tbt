var CostCenter = require('./model');

function List(req, res) {
    CostCenter.find((err, messages) => {
        if (err) res.send(err);
        res.json(messages);
    });
}

module.exports = List;

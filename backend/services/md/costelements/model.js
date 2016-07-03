var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CostElementSchema = new Schema({
    name: String
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

module.exports = mongoose.model('md_costelements', CostElementSchema);

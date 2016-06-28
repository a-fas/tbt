var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var messageSchema = new Schema({
    text: String,
    user: String
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

module.exports = mongoose.model('Message', messageSchema);

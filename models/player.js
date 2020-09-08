var { Schema, model } = require('mongoose');

var playerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  nationality: String
});

module.exports = model('Player', playerSchema);

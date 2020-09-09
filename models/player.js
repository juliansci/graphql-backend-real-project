var { Schema, model } = require('mongoose');

var playerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  nationality: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  }
});

module.exports = model('Player', playerSchema);

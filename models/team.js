var { Schema, model } = require('mongoose');

var teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: String,
  league: { type: Schema.Types.ObjectId, ref: 'League' }
});

module.exports = model('Team', teamSchema);

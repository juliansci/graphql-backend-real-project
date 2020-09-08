var { Schema, model } = require('mongoose');

var teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: String,
  league: { type: Schema.Types.ObjectId, ref: 'League' },
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
});

module.exports = model('Team', teamSchema);

var { Schema, model } = require('mongoose');

var leagueSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: String,
  country: String,
  division: Number,
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
});

module.exports = model('League', leagueSchema);


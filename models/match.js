var { Schema, model } = require('mongoose');

const MATCH_RESULTS = ['LOCAL_WIN', 'VISITING_WIN', 'TIE'];

var matchSchema = new Schema({
  local: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  visiting: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  localGoals: {
    type: Number,
    required: true
  },
  visitingGoals: {
    type: Number,
    required: true
  },
  result: {
    type: String,
    enum: MATCH_RESULTS,
    required: true
  }
});

module.exports = model('Match', matchSchema);

const Match = require('../models/match');

const getByTeam = (teamId) => {
  return Match.find({ $or: [{ 'local': teamId }, { 'visiting': teamId }] }).exec();
}

module.exports = {
  getByTeam
}
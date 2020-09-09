const Player = require('../models/player');

const getByTeam = (teamId) => {
  return Player.find({ 'team': teamId }).exec();
}

const getPlayers = () => {
  return Player.find();
}

module.exports = {
  getByTeam,
  getPlayers
}
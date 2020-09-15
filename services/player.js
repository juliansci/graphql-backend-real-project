const ObjectId = require('mongoose').Types.ObjectId;
const Player = require('../models/player');

const getByTeam = (teamId) => {
  if (!ObjectId.isValid(teamId)) {
    return;
  }
  return Player.find({ 'team': teamId }).exec();
}

const getById = async id => {
  if (!ObjectId.isValid(id)) {
    return;
  }
  return Player.findById(id).exec();
}

const getAll = () => {
  return Player.find();
}

module.exports = {
  getByTeam,
  getById,
  getAll
}
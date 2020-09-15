const ObjectId = require('mongoose').Types.ObjectId;
const Team = require('../models/team');

const getById = async id => {
  if (!ObjectId.isValid(id)) {
    return;
  }
  return Team.findById(id).exec();
}

const getAll = () => {
  return Team.find();
}

module.exports = {
  getById,
  getAll
}
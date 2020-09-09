const Team = require('../models/team');

const getById = id => {
  return Team.findById(id);
}

const getTeams = () => {
  return Team.find();
}

module.exports = {
  getById,
  getTeams
}
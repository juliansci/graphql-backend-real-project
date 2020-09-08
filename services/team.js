const Team = require('../models/team');
const getTeams = () => {
  return Team.find();
}
const getPlayers = (id) => {
  console.log('players team id: ', id)
  return [];
}

const getMatches = (id) => {
  console.log('players team id: ', id)
  return [];
}
module.exports = {
  getTeams
}
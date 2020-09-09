const teamService = require('../services/team');
const playerService = require('../services/player');

const types = require('./types');
const resolvers = {
  Query: {
    getTeams: teamService.getTeams,
    getPlayers: playerService.getPlayers
  },
  ...types
};


module.exports = resolvers;
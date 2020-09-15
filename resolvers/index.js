const teamService = require('../services/team');
const playerService = require('../services/player');
const types = require('./types');

const resolvers = {
  Query: {
    getTeams: teamService.getAll,
    getPlayers: playerService.getAll,
    getTeam: (_, { id }) => teamService.getById(id),
    getPlayer: (_, { id }) => playerService.getById(id),
  },
  ...types
};


module.exports = resolvers;
const teamService = require('../services/team');
const resolvers = {
  Query: {
    getTeams: teamService.getTeams
  },
  Team: {
    players: ({ _id }) => teamService.getPlayers(_id)
  }
};


module.exports = resolvers;
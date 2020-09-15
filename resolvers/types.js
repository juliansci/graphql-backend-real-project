const playerService = require('../services/player');
const matchService = require('../services/match');
const teamService = require('../services/team');


module.exports = {
  Team: {
    players: ({ _id }) => playerService.getByTeam(_id),
    matches: ({ _id }) => matchService.getByTeam(_id)
  },
  Player: {
    team: player => teamService.getById(player.team)
  },
  Match: {
    local: match => teamService.getById(match.local),
    visiting: match => teamService.getById(match.visiting)
  }
}
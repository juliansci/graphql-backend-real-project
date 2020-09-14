const casual = require('casual');
const randoJS = require('@nastyox/rando.js');
const rando = randoJS.rando;
const randoSequence = randoJS.randoSequence;
const ObjectID = require('bson').ObjectID;
const { generateEntities, getEntitiesId } = require('./util');
const leagues = require('./league').getEntities().documents;



const results = ['LOCAL_WIN', 'VISITING_WIN', 'TIE'];
const quantityEntities = 40;
const entityGenerator = () => {
  const randomLeague = leagues[rando(leagues.length - 1)];
  const leagueTeams = randomLeague.teams;
  const randomTeamsIndex = randoSequence(leagueTeams.length - 1);
  const randomLocalTeam = leagueTeams[randomTeamsIndex[0]];
  const randomVisitantTeam = leagueTeams[randomTeamsIndex[1]];
  const localGoals = rando(7);
  const visitingGoals = rando(7);
  let result = results[2];
  if (localGoals > visitingGoals) {
    result = results[0];
  }
  if (localGoals < visitingGoals) {
    result = results[1];
  }
  return {
    id: new ObjectID(),
    local: randomLocalTeam,
    visiting: randomVisitantTeam,
    localGoals,
    visitingGoals,
    result,
    date: casual.moment
  };
}
const entities = generateEntities(quantityEntities, entityGenerator)
const entitiesIds = getEntitiesId(entities);

module.exports = {
  getEntitiesIds: () => entitiesIds,
  getEntities: () => {
    return {
      'model': 'Match',
      'documents': entities
    }
  }
};
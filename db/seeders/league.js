const casual = require('casual');
const ObjectID = require('bson').ObjectID;
const rando = require('@nastyox/rando.js').rando;
const { generateEntities, getEntitiesId } = require('./util');
console.log(require('./team'));
const teamIds = require('./team').getEntitiesIds();

const quantityEntities = 2;
const teamsForLeague = 20;
const entityGenerator = (index) => {
  return {
    id: new ObjectID(),
    name: `${casual.word} League`,
    logo: 'https://image.freepik.com/free-vector/soccer-logo-sport-logo-football-logo_7085-195.jpg',
    country: casual.country,
    division: rando(1, 2),
    teams: teamIds.slice(index * teamsForLeague, (index + 1) * teamsForLeague)
  };
}
const entities = generateEntities(quantityEntities, entityGenerator)
const entitiesIds = getEntitiesId(entities);

module.exports = Object.assign(module.exports,{
  getEntitiesIds: () => entitiesIds,
  getEntities: () => {
    return {
      'model': 'League',
      'documents': entities
    }
  }
});

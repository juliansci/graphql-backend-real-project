const casual = require('casual');
const rando = require('@nastyox/rando.js').rando;
const ObjectID = require('bson').ObjectID;
const { generateEntities, getEntitiesId } = require('./util');
const teamIds = require('./team').getEntitiesIds;

const quantityEntities = 120;
const entityGenerator = () => {
  const randomTeam = teamIds[rando(teamIds.length)];
  return {
    id: new ObjectID(),
    name: casual.full_name,
    nationality: casual.country,
    image: 'https://image.freepik.com/free-vector/soccer-logo-sport-logo-football-logo_7085-195.jpg',
    team: randomTeam
  };
}
const entities = generateEntities(quantityEntities, entityGenerator)
const entitiesIds = getEntitiesId(entities);

module.exports = {
  getEntitiesIds: () => entitiesIds,
  getEntities: () => {
    return {
      'model': 'Player',
      'documents': entities
    }
  }
};



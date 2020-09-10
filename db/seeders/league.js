const casual = require('casual');
const ObjectID = require('bson').ObjectID;
const { generateEntities, getEntitiesId } = require('./util');

const quantityEntities = 3;
const entityGenerator = () => {
  return {
    id: new ObjectID(),
    name: casual.word,
    logo: 'https://image.freepik.com/free-vector/soccer-logo-sport-logo-football-logo_7085-195.jpg',
    country: casual.country,
    division: casual.integer(from = 1, to = 3),
  };
}
const entities = generateEntities(quantityEntities, entityGenerator)
const entitiesIds = getEntitiesId(entities);

module.exports = {
  getEntitiesIds: () => entitiesIds,
  getEntities: () => {
    return {
      'model': 'League',
      'documents': entities
    }
  }
};

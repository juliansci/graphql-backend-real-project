const { getIds } = require('./util');

const casual = require('casual');
const ObjectID = require('bson').ObjectID;
const { generateEntities, getEntitiesId } = require('./util');

const quantityEntities = 40;
const entityGenerator = () => {
  return {
    id: new ObjectID(),
    name: casual.full_name
  };
}
const entities = generateEntities(quantityEntities, entityGenerator)
const entitiesIds = getEntitiesId(entities);

module.exports = {
  getEntitiesIds: () =>  entitiesIds,
  getEntities: () => {
    return {
      'model': 'Player',
      'documents': entities
    }
  }
};



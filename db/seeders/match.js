const casual = require('casual');
const ObjectID = require('bson').ObjectID;
const { generateEntities, getEntitiesId } = require('./util');
const teamIds = require('./team').getEntitiesIds();

const results = ['LOCAL_WIN', 'VISITING_WIN', 'TIE'];
const quantityEntities = 40;
const entityGenerator = () => {
  const localGoals = casual.integer(from = 0, to = 7);
  const visitingGoals = casual.integer(from = 0, to = 7);
  let result = results[2];
  if (localGoals > visitingGoals) {
    result = results[0];
  }
  if (localGoals < visitingGoals) {
    result = results[1];
  }
  return {
    id: new ObjectID(),
    local: teamIds[1],
    visiting: teamIds[0],
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
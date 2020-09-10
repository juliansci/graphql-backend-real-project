const casual = require('casual');
const ObjectID = require('bson').ObjectID;
const { generateEntities, getEntitiesId } = require('./util');

const quantityEntities = 40;
const teamSuffixes = ['Team', 'United', 'A.C'];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const entityGenerator = () => {
  return {
    id: new ObjectID(),
    name: `${capitalizeFirstLetter(casual.word)} ${teamSuffixes[casual.integer(from = 0, to = 2)]}`
  };
}
const entities = generateEntities(quantityEntities, entityGenerator);
const entitiesIds = getEntitiesId(entities);

module.exports = {
  getEntitiesIds: () => entitiesIds,
  getEntities: () => {
    return {
      'model': 'Team',
      'documents': entities
    }
  }
};



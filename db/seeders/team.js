const casual = require('casual');
const ObjectID = require('bson').ObjectID;
const rando = require('@nastyox/rando.js').rando;
const { generateEntities, getEntitiesId } = require('./util');

const leagueIds = [];

const quantityEntities = 40;
const teamSuffixes = ['Team', 'United', 'A.C'];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const entityGenerator = () => {
  const leagueId = leagueIds[rando(leagueIds.length - 1)];
  return {
    id: new ObjectID(),
    name: `${capitalizeFirstLetter(casual.word)} ${teamSuffixes[rando(0, 2)]}`,
    logo: 'https://image.freepik.com/free-vector/soccer-logo-sport-logo-football-logo_7085-195.jpg',
    league: leagueId
  };
}
const entities = generateEntities(quantityEntities, entityGenerator);
const entitiesIds = getEntitiesId(entities);


module.exports = Object.assign(module.exports, {
  getEntitiesIds: () => entitiesIds,
  getEntities: () => {
    return {
      'model': 'Team',
      'documents': entities
    }
  }
});



const casual = require('casual');
const rando = require('@nastyox/rando.js').rando;
const ObjectID = require('bson').ObjectID;
const teams = require('./team').documents;

const randomImgUrl = 'https://randomuser.me/api/portraits/men/';
const quantityEntities = teams.length * 20;
const entityGenerator = () => {
  const randomTeam = teams[rando(teams.length - 1)];
  return {
    id: new ObjectID(),
    name: casual.full_name,
    nationality: casual.country,
    image: `${randomImgUrl}${rando(99)}.jpg`,
    team: randomTeam.id
  };
}
const getEntities = () => {
  const entities = [];
  for (let i = 0; i < quantityEntities; i++) {
    entities.push(entityGenerator());
  }
  return entities;
}

module.exports = {
  'model': 'Player',
  'documents': getEntities()
};


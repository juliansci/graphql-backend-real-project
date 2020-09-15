const casual = require('casual');
const randoJS = require('@nastyox/rando.js');
const rando = randoJS.rando;
const randoSequence = randoJS.randoSequence;
const ObjectID = require('bson').ObjectID;
const teams = require('./team').documents;

const results = ['LOCAL_WIN', 'VISITING_WIN', 'TIE'];
const quantityEntities = 40;

const entityGenerator = () => {
  const randomTeamsIndex = randoSequence(teams.length - 1);
  const randomLocalTeam = teams[randomTeamsIndex[0]];
  const randomVisitantTeam = teams[randomTeamsIndex[1]];
  const localGoals = rando(5);
  const visitingGoals = rando(5);
  let result = results[2];
  if (localGoals > visitingGoals) {
    result = results[0];
  }
  if (localGoals < visitingGoals) {
    result = results[1];
  }
  return {
    _id: new ObjectID(),
    local: randomLocalTeam._id,
    visiting: randomVisitantTeam._id,
    localGoals,
    visitingGoals,
    result,
    date: casual.moment
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
  'model': 'Match',
  'documents': getEntities()
};



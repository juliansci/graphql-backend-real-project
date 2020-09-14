const teams = require('./team').documents;
console.log(teams);
const entities = [{
  id: '5f5ff67d508f0bd0067a71cf',
  name: 'La Liga',
  logo: 'https://brandemia.org/sites/default/files/logotipos4.jpg',
  country: 'Spain',
  division: 1,
  teams: teams.map(team => team.id)
}];

module.exports = {
  'model': 'League',
  'documents': entities
};



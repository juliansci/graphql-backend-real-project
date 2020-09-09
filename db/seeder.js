require('dotenv').config()
const seeder = require('mongoose-seed');
const seederTeam = require('./seeders/team');
const seederLeague = require('./seeders/league');
const seederPlayer = require('./seeders/player');
const seederMatch = require('./seeders/match');

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const dataSeeds = [
  seederTeam,
  seederMatch,
  seederLeague,
  seederPlayer
];
console.log(seederLeague);
const modelsFolder = './models'

const models = [
  {
    name: 'Team',
    path: `${modelsFolder}/team.js`
  },
  {
    name: 'Match',
    path: `${modelsFolder}/match.js`
  },
  {
    name: 'Player',
    path: `${modelsFolder}/player.js`
  },
  {
    name: 'League',
    path: `${modelsFolder}/league.js`
  },
];

seeder.connect(`mongodb://${DB_HOST}/${DB_NAME}`, () => {
  seeder.loadModels(models.map(model => model.path));
  seeder.clearModels(models.map(model => model.name), () => {
    seeder.populateModels(dataSeeds, () => {
      seeder.disconnect();
    });
  });
});


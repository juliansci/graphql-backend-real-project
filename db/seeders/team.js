const ObjectID = require('bson').ObjectID;

const spainLeagueId = "5f5ff67d508f0bd0067a71cf";
const entities = [
  {
    id: new ObjectID(),
    name: "RCD Mallorca",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "RCD Espanyol",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Sevilla FC",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    "name": "Getafe CF",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "RC Celta Vigo",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Levante UD",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Atlético Madrid",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Real Madrid",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Valencia CF",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "FC Barcelona",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Real Sociedad",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Athletic Club Bilbao",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Real Betis",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "CA Osasuna",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Granada CF",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Real Valladolid CF",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Villarreal CF",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "Deportivo Alavés",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "SD Eibar",
    logo: "logo",
    league: spainLeagueId
  },
  {
    id: new ObjectID(),
    name: "CD Leganés",
    logo: "logo",
    league: spainLeagueId
  }
];

module.exports = {
  'model': 'Team',
  'documents': entities
};




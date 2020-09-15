const ObjectID = require('bson').ObjectID;

const spainLeagueId = "5f5ff67d508f0bd0067a71cf";
const entities = [
  {
    _id: new ObjectID(),
    name: "RCD Mallorca",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/340px-Rcd_mallorca.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "RCD Espanyol",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Rcd_espanyol_logo.svg/300px-Rcd_espanyol_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Sevilla FC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/300px-Sevilla_FC_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    "name": "Getafe CF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/360px-Getafe_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "RC Celta Vigo",
    logo: "https://2.bp.blogspot.com/-d3PF3oKhFvo/U-8sYEKuvYI/AAAAAAAADaU/ehEDq3073pE/s1600/Logo%2BCelta%2Bde%2BVigo.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Levante UD",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg/400px-Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Atlético Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/400px-Atletico_Madrid_2017_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/260px-Real_Madrid_CF.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Valencia CF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/400px-Valenciacf.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "FC Barcelona",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/360px-FC_Barcelona_%28crest%29.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Real Sociedad",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/360px-Real_Sociedad_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Athletic Club Bilbao",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/400px-Club_Athletic_Bilbao_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Real Betis",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/460px-Real_betis_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "CA Osasuna",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/340px-Osasuna_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Granada CF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Logo_of_Granada_Club_de_F%C3%BAtbol.svg/170px-Logo_of_Granada_Club_de_F%C3%BAtbol.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Real Valladolid CF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Real_Valladolid_Logo.svg/440px-Real_Valladolid_Logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Villarreal CF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Villarreal_CF_logo.svg/340px-Villarreal_CF_logo.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "Deportivo Alavés",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/400px-Deportivo_Alaves_logo_%282020%29.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "SD Eibar",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SD_Eibar_logo_2016.svg/340px-SD_Eibar_logo_2016.svg.png",
    league: spainLeagueId
  },
  {
    _id: new ObjectID(),
    name: "CD Leganés",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Club_Deportivo_Legan%C3%A9s_logo.svg/440px-Club_Deportivo_Legan%C3%A9s_logo.svg.png",
    league: spainLeagueId
  }
];

module.exports = {
  'model': 'Team',
  'documents': entities
};




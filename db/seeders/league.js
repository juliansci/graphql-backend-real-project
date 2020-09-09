const ObjectID = require('bson').ObjectID;

module.exports = {
  'model': 'League',
  'documents': [
    {
      id: new ObjectID(),
      name: 'Liga Argentina',
      logo: 'sarasa',
      country: 'Argentina',
      division: 1,
    }
  ]
};



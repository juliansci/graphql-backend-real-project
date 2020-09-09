const ObjectID = require('bson').ObjectID;

module.exports = {
  'model': 'Team',
  'documents': [
    {
      id: new ObjectID(),
      name: 'Boca',
    },
    {
      id: new ObjectID(),
      name: 'River',
    }
  ]
};



const ObjectID = require('bson').ObjectID;

module.exports = {
  'model': 'Player',
  'documents': [
    {
      id: new ObjectID(),
      name: 'Julian Sco'
    },
    {
      id: new ObjectID(),
      name: 'Pedro Sarasa'
    }
  ]
};



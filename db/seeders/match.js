const ObjectID = require('bson').ObjectID;

module.exports = {
  'model': 'Match',
  'documents': [
    {
      id: new ObjectID(),
      localGoals: 2,
      visitingGoals: 2,
      result: 'TIE',
      date: '2020-09-08T01:10:43.115Z'
    }
  ]
};



const mongoose = require('mongoose');
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const connect = async callback => {
  await mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.on('error', err => {
    console.error(err);
  });
  db.once('open', () => {
    console.log('DB Connection OK');
    callback();
  });
}

module.exports = {
  connect
}
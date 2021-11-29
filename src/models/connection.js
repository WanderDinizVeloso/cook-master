const { MongoClient } = require('mongodb');

const URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_NAME = 'Cookmaster';

let connection = null;

module.exports = async () => {
  if (!connection) {
    connection = (await MongoClient.connect(
      URL,
      OPTIONS,
    )).db(DB_NAME);
  }
  
  return connection;
};
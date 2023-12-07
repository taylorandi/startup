const { MongoClient } = require('mongodb');
const config = require('./dbconfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const orderCollection = db.collection('order');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addOrderNum(orderNum) {
  const result = await orderCollection.insertOne(orderNum);
  return result;
}

function getOrderNum(userName) {
  const query = { userName: {userName}} ;
  const options = {
    sort: { orderId: -1 },
    limit: 10,
  };
  const cursor = orderCollection.find(query, options);
  return cursor.toArray();
}

module.exports = { addOrderNum, getOrderNum };

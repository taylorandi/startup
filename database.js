const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const orderCollection = db.collection('orders');

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

function getOrderNum() {
  const cursor = orderCollection.find().sort({orderId:-1}).limit(1);
  return cursor.toArray();
}

module.exports = { addOrderNum, getOrderNum };

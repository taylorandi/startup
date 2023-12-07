const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

//get quote
apiRouter.get('/orderId', async (_req, res) => {
  const order = await DB.getOrderNum();
  res.send(order);
});

//submit Order Number
apiRouter.post('/oderId', async (req, res) => {
  DB.addOrderNum(req.body);
  const orderId= await DB.getOrderNum();
  res.send(orderId);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
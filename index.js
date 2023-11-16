const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

//get quote
apiRouter.get('/orderId', (req, res) => {res.send(orderrId);});

//submit Order Number
apiRouter.send('orderId', (req,res) => {
  orderrId = UpdateId(req.body, orderrId);
  res.send(orderrId);
})

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
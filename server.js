// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const router = express.Router();

// Get our API routes
//const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// declare axios for making http requests
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/data', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  /*axios.get(`${API}/posts`)
   .then(posts => {
   res.status(200).json(posts.data);
   })
   .catch(error => {
   res.status(500).send(error)
   });*/

  res.status(200).json(
    [{
      id: 1,
      name: 'localhost data 1'
    },{
      id: 2,
      name: 'localhost data 2'
    }]
  );

});


// Set our api routes
app.use('/api', router);

// Catch all other routes and return the index file
/*app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist/index.html'));
 });*/

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8015';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));





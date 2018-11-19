const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const http = require('http');
const usersController = require('./controllers/users')


const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// require('./routes')(app)
app.post('/api/users/add-user', usersController.addUser)
app.get('*', (req, res) => res.status(200).send({
  msg: "welcome to the index"
}));

app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT)
module.exports = app
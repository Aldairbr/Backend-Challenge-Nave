const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

const { DATABASE } = process.env;
const { PORT } = process.env || 3333;
const { PASSWORD } = process.env;

module.exports = { DATABASE, PORT, PASSWORD };

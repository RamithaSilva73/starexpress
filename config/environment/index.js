const ENV = process.argv[2] || 'development';
const config = require('./' + ENV);
module.exports = config;

  
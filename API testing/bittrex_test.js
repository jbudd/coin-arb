var bittrex = require('node-bittrex-api');
const {KEY , SECRET} = require('./config.json');
const fs = require('fs');

bittrex.options({
  'apikey' : KEY,
  'apisecret' : SECRET,
});

bittrex.getmarketsummaries(function( data, err ) {
  if (err) {
    return console.error(err);
  }
    console.log(data);
});
// Libraries
const fs = require('fs');
//const csv = require('fast-csv');

//API and keys
const gdax = require('gdax');
const publicClient = new gdax.PublicClient();

var bittrex = require('node-bittrex-api');
const {BX_KEY , BX_SECRET} = require('./config.json');
bittrex.options({
  'apikey' : BX_KEY,
  'apisecret' : BX_SECRET,
});

var gdax_rate =[];
var BX_rate =[];
var time = [];
var arb = [];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//get data function
function get_rates() {
	//get gdax rate
	publicClient.getProductTicker((error, response, data)=>{
		//console.log(data);
		gdax_rate = data.price;
		time = data.time;

		// get BX rate
		bittrex.getticker( { market : 'USDT-BTC' }, function( data, err ) {
	  		
	  		BX_rate = data.result.Bid;

			arb = Math.abs(BX_rate-gdax_rate)/Math.min(gdax_rate,BX_rate)*100;

			//add data to file
			fs.appendFile('arb_data.csv',[gdax_rate,BX_rate,arb,time]+'\n',(err)=>{
				sleep(300000).then(()=>{
					get_rates();
				});
			});

		});
	});
};

//start program
get_rates();


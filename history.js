const gdax = require('gdax');
const publicClient = new gdax.PublicClient();
const fs = require('fs');
const csv = require('fast-csv');

var ws = fs.createWriteStream('my.csv');

// Get data 
publicClient.getProductHistoricRates({'start':'2017-11-07', 'end':'2017-11-08','granularity': 3000},(error, response, data)=>{
	if (error){
		console.log("there was an error");
	}
	else{

		csv
			.write(data)
			.pipe(ws);

	}
});
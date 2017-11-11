const gdax = require('gdax');
const publicClient = new gdax.PublicClient();
const fs = require('fs');
const csv = require('fast-csv');


var num_days = 10;
var today = new Date();
today.setDate(today.getDate());
var start = new Date();
var end = new Date();

// Get data
function get_data(i){
	if(i < num_days){
		start.setDate(today.getDate() - num_days+i-2);
		end.setDate(today.getDate()-num_days+i-1);
		publicClient.getProductHistoricRates({'start': start, 'end':end,'granularity': 86400},(error, response, data)=>{
		if (error){
			console.log("there was an error");
		}
		else{

			csv
				.writeToString(data,function(err,data){
					fs.appendFile('my.csv',data+'\n',(err)=>{
						if(err) throw err;
						console.log("the data was appended");
					});
				})
				

			}
		});
		i+=1;
		get_data(i);
	}else{
		i=0;
	}
	
};

get_data(0);
const gdax = require('gdax');
const publicClient = new gdax.PublicClient();
const fs = require('fs');
const csv = require('fast-csv');


var num_days = 50;
var today = new Date('2017-11-11');
//today.setDate(today.getDate());
var start = new Date();
var end = new Date();
//console.log(start);

// Get data
function get_data(i){
	if(i < num_days){
		start.setDate(today.getDate() - num_days+i-1);
		end.setDate(today.getDate()-num_days+i);
		publicClient.getProductHistoricRates({'start': start, 'end':end,'granularity': 600},(error, response, data)=>{
			if (error){
				console.log("there was an error");
			}
			else{

				csv
					.writeToString(data,function(err,data){
						fs.appendFileSync('my.csv',data+'\n');
					});
					

				i+=1;
				get_data(i);
			}
		});

	}else{
		i=0;
	}
	
};

function cycle_dates(i){
	if(i < num_days){
		//console.log("today is "+today);
		start = new Date(today.setDate(today.getDate() - num_days+i));
		end = new Date(today.setDate(today.getDate() - num_days+i+1));
		console.log("start is: "+start);
		console.log("end is: "+end);
	i+=1;
	cycle_dates(i);
	}else{
		i=0;
	}
}

//cycle_dates(0);
get_data(0);

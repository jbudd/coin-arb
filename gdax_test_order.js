const gdax = require('gdax');
const key = process.env.GDAX_SB_KEY;
const b64secret = process.env.GDAX_SB_SECRET;
const passphrase = process.env.GDAX_SB_PP;

const sandbox = 'https://api-public.sandbox.gdax.com';

const authedClient = new gdax.AuthenticatedClient(key,b64secret,passphrase,sandbox);

// authedClient.getAccounts((error, response, data)=>{
// 	if(error){
// 		console.log("there was an error");
// 	}else{
// 		console.log(data);
// 	}
// });

// const buyParams = {
// 	"type" : "market",
// 	"product_id": "BTC-USD",
// 	"size": ".01",
// }

// authedClient.buy(buyParams, (error, response, data)=>{
// 	if(error){
// 		console.log("there was a buying error");
// 	}else{
// 		console.log(data);
// 	}
// })

authedClient.getOrders((error, response, data)=>{
	console.log(data);
});
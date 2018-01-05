const gdax = require('gdax');
const websocket = new gdax.WebsocketClient(['BTC-USD','ETH-USD']);

websocket.on('message',data =>{
	console.log(data);
});
websocket.on('error', err =>{
	console.log(err);
});
websocket.on('close',()=>{
	console.log("closed");
});
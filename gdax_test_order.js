const gdax = require('gdax');
const key = 'a278b4b406e120d51ab18a46f60d5bd2';
const b64secret = 'fCfjpgEDrkZ2yRNDa4LRd806ZHDpMqQgtQGjPUReq6XCAFAmbvkkTVlHXMteelaj0BunA747tUpJmSWG2DCHqw==';
const passphrase = 'tzl8entexb';

const sandbox = 'https://api-public.sandbox.gdax.com';

const authedClient = new gdax.AuthenticatedClient(key,b64secret,passphrase,sandbox);

authedClient.getAccounts((error, response, data)=>{
	if(error){
		console.log("there was an error");
	}else{
		console.log(data);
	}
});
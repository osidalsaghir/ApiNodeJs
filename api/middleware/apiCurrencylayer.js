let api=require('../config/api');
const CurrencyLayerClient = require('currencylayer-client');
let client;
if(api.currencylayer.free)
{
    client = new CurrencyLayerClient({apiKey: api.currencylayer.key});
}
else
{
    client = new CurrencyLayerClient({apiKey: api.currencylayer.key, free: false});
}
module.exports=client;

var WooCommerceAPI = require('woocommerce-api');

const api = new WooCommerceAPI({
    url:'http://plugin-test.local',
    consumerKey : process.env.MY_CONSUMER_KEY,
    consumerSecret : process.env.MY_CONSUMER_SECRET,
    wpAPI:true,
    version : 'wc/v2'
});


module.exports = api ;
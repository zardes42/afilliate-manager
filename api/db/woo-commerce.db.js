const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url:'http://plugin-test.local',
    consumerKey : process.env.MY_CONSUMER_KEY,
    consumerSecret : process.env.MY_CONSUMER_SECRET,
    version : 'wc/v3'
});


module.exports = api ;
const {WooServices} = require('../services')
const {wooOrders} = WooServices



const getAllOrdersFromApi = async(req, res)=>{
    try{
         await wooOrders(res)
    }catch(err){console.log(err)}
   
}

module.exports =getAllOrdersFromApi;
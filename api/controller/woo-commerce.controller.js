const {WooServices} = require('../services')
const {wooOrders} = WooServices



const getAllOrdersFromApi = async(req, res)=>{
    try{
          res.send( await wooOrders())
    }catch(err){console.log(err)}
   
}

module.exports =getAllOrdersFromApi;
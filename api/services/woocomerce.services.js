const { api } = require("../db/index");

const wooOrders = async()=>{
    
    
    return await api.get("orders").then(res =>{
         return res.data
    })
}

module.exports ={
    wooOrders,
}
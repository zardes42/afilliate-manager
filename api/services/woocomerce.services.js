const { api } = require("../db/index");

const wooOrders = async(res)=>{
    
    
     await api.get("orders",(req,response) =>{  
      res.send( new Array(JSON.parse(response.body)[0]))
           
           
       })
}

module.exports ={
    wooOrders,
}
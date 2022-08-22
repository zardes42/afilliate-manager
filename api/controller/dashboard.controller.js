const {Afilliates,WooServices} = require('../services/index')
const { api } = require("../db/index");



const {getAfilliates} = Afilliates;
const {wooOrders} = WooServices;

const getDashboard = async (req, res) => {
        let afilliates =[],orders=[],processing_orders=0 ,completed_orders=0;
    afilliates = await getAfilliates()
   orders =  await wooOrders()
   orders.forEach(order => {

        if(order.status === 'processing') {
                console.log('process-order')
                processing_orders += 1;
        }else if(order.status === 'completed'){
             
                console.log('complete-order')
                completed_orders += 1;
            
        }

    })
    res.status(200).send({message:'success',data:{
        afilliates: afilliates.length,
        total_orders:orders.length,
        completed_orders,
        processing_orders
    }})
    
        
        

}
module.exports = getDashboard
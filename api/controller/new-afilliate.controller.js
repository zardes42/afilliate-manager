const {Afilliates,WooServices} = require('../services/index')
const {newAfilliate} = Afilliates;
const {wooOrders} = WooServices



const createNewAfilliate = async (req, res) => {

    let  {first_name,last_name,church,code}=  req.body;
    let sales_made = 0 ;
    try{
        await wooOrders().forEach((item) =>
        {
           obj = item.meta_data.filter(obj => obj.key === 'referal_code')

           if(obj.length == 1){
               if(code == obj[0].value){
                   sales_made += 1;
               }
           }else{
               try {
                   throw new Error('referal code obj returned more than one referal_code!!!!!!');
                 } catch (e) {
                   console.error(`${e.name}: ${e.message}`);
                 }
           }
       
       })
    }catch(err){
        console.log(err)
    }
  
         if (newAfilliate(first_name,last_name,church,code,sales_made)){
            res.status(201).send({message: "success"})
         }
         else{
            res.send({message:"error in creating user"})
         }
     
 
 }
 module.exports =createNewAfilliate;
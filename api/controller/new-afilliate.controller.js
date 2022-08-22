const {Afilliates} = require('../services/index')
const {newAfilliate} = Afilliates;
const {api} = require('../db/index')


const createNewAfilliate = async (req, res) => {

    let  {first_name,last_name,church,code}=  req.body;
    let sales_made = 0 ;
    api.get("orders",async(req,response) =>{
 
         JSON.parse(response.body).forEach((item , i) => {
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
         
         if (newAfilliate(first_name,last_name,church,code,sales_made)){
            res.status(201).send({message: "success"})
         }
         else{
            res.send({message:"error in creating user"})
         }
     })
 
 }
 module.exports =createNewAfilliate;
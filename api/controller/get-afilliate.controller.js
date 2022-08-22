const {Afilliates} = require('../services/index')
const {getAfilliates} = Afilliates


const getAllAfilliate =async (req, res) => {
    
    let result;
    try{

         result =  await getAfilliates()
        
    }
    catch(err){
        console.log(err)
    }
    if (result){
        res.status(200).send({message:'success',data : result});
    }else{
        res.status(500).send({message: 'Error in getting data from db'})
    }
}

module.exports = getAllAfilliate
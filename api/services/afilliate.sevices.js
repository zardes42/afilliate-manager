const {afilliatesdb} = require('../db/index')





// INSERT INTO MEMBERS TABLE

const newAfilliate = async (first_name,last_name,church,code,sales_made)=>{

    try{             
      return await afilliatesdb.promise().query(`INSERT INTO members (first_name , last_name ,church,code , sales_made) VALUES ('${first_name}' , '${last_name}' , '${church}' , '${code}', '${sales_made}' )`);
    }catch(err){
        console.log(err)
        return false
    }
}
// GET ALL AFILLIATES FROM DB
const getAfilliates = async()=>{
    let data ;
    try{
    return await afilliatesdb.promise()
        .query('SELECT * FROM members').then(response => {
            // console.log(response[0)
            return response[0]
            
        })
    }catch(err){
        console.log(err)
        return false
    }

}
// CHECK DATABASE IF CODE ALREADY EXISTS
const checkNewCode = async(code) =>{
    

    return afilliatesdb.promise().query(`SELECT * FROM members WHERE code = '${code}';`).then(response =>{
        if(response[0].length === 0){
           return true;

        }
        else{
            return false;
        }

    })

}




module.exports = {
    newAfilliate,
    getAfilliates,
    checkNewCode,
}
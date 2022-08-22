const {Afilliates} = require('../services/index')
const {checkNewCode} = Afilliates
const getCode = require('../utilities/index')

const getNewCode =  (req, res) => {
    let code = getCode();
   while(checkNewCode(code)  === false ){
          code = getCode();
          console.log('here',code)

   }
   res.send(code)
}
module.exports = getNewCode;
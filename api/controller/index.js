const createNewAfilliate = require('./new-afilliate.controller')
const getAllOrdersFromApi = require('./woo-commerce.controller')
const getAllAfilliates = require('./get-afilliate.controller')
const getNewCode = require('./afilliate-code.controller')
const getDashboard = require('./dashboard.controller')


module.exports= 
{
    createNewAfilliate,
    getAllOrdersFromApi,
    getAllAfilliates,
    getNewCode,
    getDashboard,
}



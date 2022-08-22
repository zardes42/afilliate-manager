const express = require('express');
const router = express.Router();
const Controllerapp = require('../controller/index')

let {getNewCode,createNewAfilliate,getAllAfilliates,getAllOrdersFromApi}  = Controllerapp ;

// SENDS NEW CODE FOR REGISTERING USER
router.get("/new_code",getNewCode);

// CREATE NEW AFFILIATE AND STORES IN DB
router.post('/new_user',createNewAfilliate);

// GET ALL AFILLIATES FROM DB
router.get('/all_members',getAllAfilliates);

// GETS ALL ORDERS FROM WOOCOMMERCE API 
router.get('/all_orders', getAllOrdersFromApi);




module.exports = router;
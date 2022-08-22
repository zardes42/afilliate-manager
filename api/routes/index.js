const express = require('express');
const router = express.Router();
const Controllerapp = require('../controller/index')

let {getNewCode,createNewAfilliate,getAllAfilliates,getAllOrdersFromApi,getDashboard}  = Controllerapp ;

// SENDS NEW CODE FOR REGISTERING USER
router.get("/new_code",getNewCode);

// CREATE NEW AFFILIATE AND STORES IN DB
router.post('/new_user',createNewAfilliate);

// GET ALL AFILLIATES FROM DB
router.get('/all_members',getAllAfilliates);

// GETS ALL ORDERS FROM WOOCOMMERCE API 
router.get('/all_orders', getAllOrdersFromApi);

// GETS DETAILS FOR DASHBOARD AND
router.get('/dashboard',getDashboard);




module.exports = router;
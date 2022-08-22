const express = require('express');
const app = express();
require('dotenv').config()

const cors = require('cors');
const Router = require('./routes/index')

// MIDDLEWARE 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())


app.set('view engine', 'ejs')

app.use('/api',Router);



  


app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${process.env.PORT}...`);
});

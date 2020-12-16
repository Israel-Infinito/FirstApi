const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//Connection to the database on mongodb
mongoose.connect(process.env.DB_CONNECTION,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},

() => console.log ('We are connected to the database')
);

app.listen (
    3000, () => console.log('Server has started')
)
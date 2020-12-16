const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')


//This is a middleware that help parse our requests from web 
app.use(bodyParser.json());


//This connect the post route to the main app
const postRoute = require('./routes/postroute');
app.use('/posts', postRoute);

app.use(bodyParser.json());

//Connection to the database on mongodb
mongoose.connect(process.env.DB_CONNECTION,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},

() => console.log ('We are connected to the database')
);



app.listen (
    8000, () => console.log('Server has started')
)
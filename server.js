const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const items = require('./routes/api/items');

const app = express();

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(bodyParser.json())

const dbConfig = require('./config/database.config').uri;

mongoose.Promise = global.Promise;
mongoose
    .connect(dbConfig,{ useNewUrlParser: true ,useUnifiedTopology: true })
    .then((db)=>console.log("Database Connected successfully"))
    .catch(err=>console.log(err));

//
app.use('/api/items',items);



const port = process.env.PORT || 4000;


app.listen(port,()=>console.log('Server started on '+port));

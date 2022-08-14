const express = require('express');
const callAtlasDB = require('./atlas');
var cors = require('cors')
const app = express();
const port = 3005;


var corsOptions = {
  //origin: 'http://localhost:3000',
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



app.get('/', (req, res) => {
  res.json({message : "hellow world"});
})

app.get('/tasks',cors(corsOptions),(req,res)=> {
  const result = callAtlasDB("find").then( data => 
    res.json({data})
    )
    
})


app.get('/atlas',(req,res)=> {
  res.json({result:'getting all tasks in DB '})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
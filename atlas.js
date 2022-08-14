require('dotenv').config();
var axios = require('axios');


const callAtlasDB = async (action)=> {

    
   
    var db = JSON.stringify({
        "collection": process.env.COLLECTION,
        "database": process.env.DATABASE,
        "dataSource": process.env.DATASOURCE
    });
    
    
   
    var config = {
        method: 'post',
        url: `${process.env.MONGODBURL}/${action}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': process.env.MONGODBAPIKEY,
        },
        data: db
    };


    try {
        const result = await axios(config);
        return result.data.documents;
    }
    
    catch(err) {
        console.log(err)
    }    
}  // end of callAtlasDB function


// function to delete a record from atlas mongo




module.exports=callAtlasDB;
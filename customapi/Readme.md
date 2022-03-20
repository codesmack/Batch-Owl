
# How to create api using express from start!
<ul>
<li>md customapi</li>
<li>cd customapi
<li>npm init (enter all default except)
<pre>entry point: index.js</pre>

<li>npm i express --save

<li>add file "index.js" in folder "customapi"

<li> In  "index.js" add below code:
  <pre>
const express = require("express");
const app = express();
const port = 3300;

app.listen(port, () => {
    console.log("Custom api url: http://localhost:" + port);
})
</pre>
<li> Use below command to run the api
<li> node index.js  
</ul>

# How to resolve CORS warning (Cross Origin Request Error):

<ul>
  <li>npm install cors --save
  <li>Add the below code to your "index.js"
    
  <pre>const cors = require("cors");
const corsInstance = cors();
corsInstance.origin = "*"; //'Access-Control-Allow-Origin'
corsInstance.credentials = true; //access-control-allow-credentials:true
corsInstance.optionSuccessStatus = 200;
  
//below app is => const app = express();
app.use(corsInstance);
</pre>


# How to install Mysql2 npm package
<pre>npm install --save mysql2</pre>

## Sample Database Query you can add in index.js under specific route

<pre>
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(err); 
    console.log(results); // results contains rows returned by server
  }
);

// query with parameters
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(err); 
    console.log(results);
  }
);
</pre>



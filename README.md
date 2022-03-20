# Part 1: (Node Installation)
1. Go to URL https://nodejs.org/en/download/
   Download and Install - LTS - Windows Installer (.msi) - x64
2. Once Installed, Open Command Propmpt and run cmd:<br>
   <code>node -version</code><br>
   <br>
   (Expected Output: v14.x.x  -- some version number)

# Part 2: (Angular CLI Installation)
1. Open Command Propmpt and run cmd: <br>
   <code>npm install -g @angular/cli</code>

2. Once Installation is over, run cmd:<br>
   <code>ng version</code><br>
   <br>
  (Expected Output: Angular CLI: 13.x.xx  -- some version number) 

# Part 3: (Create an Angular App)
1. Open Folder Explorer, Create folder C:\<YourName>\Projects\Ng
2. Open Command Propmpt and run cmd:<br>
   <code>cd C:\<YourName>\Projects\Ng</code><br>
   <br>
3. run cmd:
   <code>ng new MyFirstApp<br></code>
   <br>
   (Expected Output: First Angular app will get created)

4. run cmd:<br>
   <code>cd C:\<YourName>\Projects\Ng\MyFirstApp</code><br>
   <code>ng serve --open</code><br>
   <br>
   (Expected Output: First Angular app will get launched in browser at http://localhost:4200)
      
# How to install Typescript?
      
1. Ensure <b>Part 1: (Node Installation)</b> is completed.
2. Open Command Propmpt and run cmd:<br>
   <code>npm install typescript</code><br>
   <br>
   <br>
3. Once Installation is over, run cmd:<br>
   <code>tsc -version</code><br>
   <br>
  (Expected Output: Version 4.x.x  -- some version number)

      
# How to execute Typescript using Node ?
      
1. Create a folder, c:\TypescriptFiles
2. Create a file "Sample.ts" in folder c:\TypescriptFiles
3. Add following code in file "Sample.ts"
<pre>
      <code>
class People
{
    info : any;
    name : string;
    age: number;

    constructor(name : string, age : number, info)
    {
        this.name = name;
        this.age = age;
        this.info = info;
    }

    printInfo() : string 
    {
        let data = `My name is ${this.name}. My age is ${this.age}`;
        console.log(data);
        return data;
    }
}
let p = new People("Walt", 25, "Nice guy");
p.printInfo();
</code>
</pre>

4. Open Command Propmpt and run cmd:<br>
   <pre>
      <code>
      cd c:\TypescriptFiles
      tsc Sample.ts 
      node Sample.js
      </code>
   </pre>
   <br>
   (Expected Output: <mark>My name is Walt. My age is 25<mark>)

    
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

## Sample Code for Running Database Query  (You can add these code in Index.js under specific route)

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

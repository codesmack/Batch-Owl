const express = require("express");
const cors = require("cors");

const app = express();
const port = 3300;

const corsInstance = cors();
corsInstance.origin = "*";
corsInstance.credentials = true; //access-control-allow-credentials:true
corsInstance.optionSuccessStatus = 200;

app.use(corsInstance);

//request body data will be typeof json 
app.use(express.json());

app.listen(port, () => {
    console.log("Custom api is running on the port " + port);
    console.log("Custom api url: http://localhost:" + port);
})

app.get("/", (req, res) =>{
    res.status(200).json({ success : true, date: '3/20/2022' });
})
app.get("/users", (req, res) =>{
    res.status(200).json({ userId : 1, userName: 'Mike Pollock' });
})

app.get("/photos", (req, res) =>{
    res.status(200).json(
        [
            {
              "albumId": 1,
              "id": 1,
              "title": "accusamus beatae ad facilis cum similique qui sunt",
              "url": "https://via.placeholder.com/600/92c952",
              "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
            {
              "albumId": 1,
              "id": 2,
              "title": "reprehenderit est deserunt velit ipsam",
              "url": "https://via.placeholder.com/600/771796",
              "thumbnailUrl": "https://via.placeholder.com/150/771796"
            },
            {
              "albumId": 1,
              "id": 3,
              "title": "officia porro iure quia iusto qui ipsa ut modi",
              "url": "https://via.placeholder.com/600/24f355",
              "thumbnailUrl": "https://via.placeholder.com/150/24f355"
            }]
        );
})


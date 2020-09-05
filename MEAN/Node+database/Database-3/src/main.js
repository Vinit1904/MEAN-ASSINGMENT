const express = require("express");
const app = express();

// http://localhost:3000/ :: URL :: API :: REST API
// http://localhost:3000/?username=Shweta&id=12
app.get("/", (req, res) => {
    //const id = req.query.id;
    //const username = req.query.username;

    const json = { id: 12, title: "rahul" };
    res.json(json);
});

// http://localhost:3000/search :: URL :: API :: REST API
app.get("/search", (req, res) => {
    const json = { id: 100, title: "I am Search API!!" };
    res.json(json);
});

app.listen(3000);
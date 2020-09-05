const express = require('express');
const app = express();
let adddb = require("./database");



/*let input = {
    C_ID: "2",
    name: "rahul",
    city: "bhilai",
    email: "rahul@gmail.com",
};*/
//adddb.addUser(input);

// let url = `http://localhost:3000/customer?C_ID=3&name=ronal&city=amaravati&email=ronal@gmail.com`;

//app.get('Endpoint-path', caallback(req, res) => {}

app.get('/customer', async (req, res) => {

    try {

        const input = req.query;

        await adddb.addUser(input);
        res.json({ input });
    }
    catch{
        res.json({ meassge: "error" })
    }
})
app.listen(3000);




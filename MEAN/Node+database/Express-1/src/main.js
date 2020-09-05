const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); //unblocking policy
app.use(express.json());

const AddUser = require("./add");
//http://localhost:3000/adduser?C_ID=95&name=Vinit&City=akola&email=vinit@gmail.com
/*app.get('/AddUser', async (req, res) => {

    try {
        const input = req.query;

        await AddUser.AddData(input);

        res.json({ input });

    } catch (err) {
        res.json({ message: "failure" });
    }
});
*/



app.post("/adduser", async (req, res) => {
    try {
        const input = req.body; // before doing this // app.use(express.json());

        await AddUser.AddData(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});




app.listen(3000);
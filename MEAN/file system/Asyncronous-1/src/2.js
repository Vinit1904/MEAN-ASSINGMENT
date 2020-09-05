const fs = require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(fs);

let realDemo = () => {

    const filepath = "/Users/Vinit/Desktop/new.txt";

    const mpromise = fs.readFileAsync(filepath, { encoding: "utf-8" });

    mpromise.then((data) => {
        console.log(data);
    })
        .catch((err) => {
            console.log(err);
        });

};


realDemo();
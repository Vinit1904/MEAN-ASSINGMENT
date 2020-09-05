const fs = require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(fs);

let readDemo1 = () => {

    const filePath = "/Users/Vinit/Desktop/new.txt";


    fs.readFileAsync(filePath, { encoding: "utf-8" })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
};


readDemo1();
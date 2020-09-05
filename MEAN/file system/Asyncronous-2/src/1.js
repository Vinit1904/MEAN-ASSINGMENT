const fs = require("fs");


let readDemo = () => {
    try {
        const filePath = "/Users/Vinit/Desktop/node.txt";
        fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
            console.log(err);
            console.log(data);
        });
    } catch (err) {
        console.log(err);
    }
};

readDemo();
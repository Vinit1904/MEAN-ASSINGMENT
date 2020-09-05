const fs = require("fs");


let readFilewithoutExpetion = () => {

    try {
        const filepath = "/Users/Vinit/Desktop/MEAN/fs/fsSc/src/2.txt";

        const fileContent = fs.readFileSync(filepath, { encoding: "utf-8" });

        console.log(fileContent);
    } catch (err) {
        console.log("there is problem in page", err.messsage);
    }
};


readFilewithoutExpetion();
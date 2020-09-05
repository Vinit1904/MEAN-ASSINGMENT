const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = {
    host: "127.0.0.1",
    user: "root",
    password: "Patil@1904",
    database: "p_mean"

};


let database = async () => {
    try {
        const connection = mysql.createConnection(config);

        await connection.connectAsync();
        console.log("connection successfull");

        let q = "select * from Person";
        let p = "insert into person (PersonID,LastName,FirstName,City) values (3,'Akhdanand','Tripathi','Mizapur')";


        await connection.queryAsync(p);
        let result = await connection.queryAsync(q);

        console.log(result);
        connection.endAsync();
        console.log("connection Ended");
    } catch (err) {
        console.log(err);
    }

};
database();
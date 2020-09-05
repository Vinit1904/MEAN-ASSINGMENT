
const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "127.0.0.1",
    user: "root",
    password: "Patil@1904",
    database: "demo",
};

let addUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "INSERT INTO customer (C_ID, name, city, email) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.C_ID,
        input.name,
        input.city,
        input.email,
    ]);

    await connection.endAsync();
};

module.exports = { addUser };




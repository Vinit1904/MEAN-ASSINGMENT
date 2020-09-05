const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./confi");

let readData = async (input) => {

    let connection = mysql.createConnection(config.DB_Config);

    await connection.connectAsync();

    let sql = "select * from customer";

    let result = await connection.queryAsync(sql);


    await connection.endAsync();

    return result;
};


module.exports = {
    readData
}
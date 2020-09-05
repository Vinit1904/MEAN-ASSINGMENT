const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./confi");
AddData = async (input) => {

    const Connection = mysql.createConnection(config.DB_Config);

    await Connection.connectAsync();

    let sql = "insert into customer (C_ID,name,city,email) values (?,?,?,?)";

    await Connection.queryAsync(sql, [
        input.C_ID,
        input.name,
        input.City,
        input.email
    ]);




    await Connection.endAsync();

    return;
};

module.exports = {
    AddData
};
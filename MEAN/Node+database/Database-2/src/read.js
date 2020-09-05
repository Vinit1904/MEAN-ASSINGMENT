const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");
const Connection = require("mysql/lib/Connection");


let readAlluser = async () => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM PERSON";
    let results = await connection.queryAsync(sql);
    //console.log(results);
    await connection.endAsync();

    return results;
};

let readUserbyQuery = async () => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "select *  from person where  city = ?";
    //let sql = "SELECT * FROM PERSON";

    //let results = await connection.queryAsync(sql, [3]);
    let results = await connection.queryAsync(sql, ["banglore"]);

    //let results = await connection.queryAsync(sql);
    await connection.endAsync();

    return results;
};


let readUserByQueryParams = async (id, email) => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM person WHERE PersonID=? AND City=? ";
    let results = await connection.queryAsync(sql, [id, email]);

    await connection.endAsync();
    return results;
};

let readUserByQueryJsonParam = async (user) => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM person WHERE PersonID=? AND City=? ";
    let results = await connection.queryAsync(sql, [user.PersonID, user.City]);

    await connection.endAsync();
    return results;
};



module.exports = {
    readAlluser,
    readUserbyQuery,
    readUserByQueryParams,
    readUserByQueryJsonParam
};
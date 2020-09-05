const dbread = require("./read");

/*let output = dbread.readAlluser();

output.then((output) => {
    console.log(output);
});
//console.log(output);
*/
/*
let output = dbread.readUserbyQuery();

output.then((output) => {
    console.log(output);
});
*/
/*
let output = dbread.readUserByQueryParams(2, "banglore");

output.then((output) => {
    console.log(output);
});

*/

let user = {
    PersonID: 2,
    City: 'banglore'
}

let output = dbread.readUserByQueryJsonParam(user);

output.then((output) => {
    console.log(output);
});


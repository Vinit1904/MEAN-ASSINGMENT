let registerpost = async () => {

    const C_ID = document.querySelector("#C_ID").value;
    const name = document.querySelector("#name").value;
    const City = document.querySelector("#city").value;
    const email = document.querySelector("#email").value;

    const input = {
        C_ID,
        name,
        City,
        email
    };

    //console.log(input.C_ID, input.name, input.email, input.City);
    const url = "http://localhost:3000/Adduser";

    // http understands text
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
            "Content-Type": "application/json",
        },

    });


    /* document.querySelector("#C_ID").value = "";
     document.querySelector("#name").value = "";
     document.querySelector("#city").value = "";
     document.querySelector("#email").value = "";
 */

};
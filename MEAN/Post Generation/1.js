const parentblock = document.querySelector("#parentBlock");

window.addEventListener("load", () => {
    console.log("Onload functionxx");

    //step-1

    let xhr = new XMLHttpRequest();

    //step-2
    xhr.open("GET", "https://reqres.in/api/users?page=2")


    //step-3
    //Handshaking and Listener Respnose
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {

            console.log(xhr.responseText);

            let sjson = JSON.parse(xhr.responseText);

            console.log(sjson.data);


            domlogicHere(sjson.data);
        }



    };

    xhr.send();
});


let domlogicHere = function (list) {
    let parent = document.querySelector("#parentBlock");
    console.log("inside.load", parent);


    for (let i = 0; i < list.length; i++) {
        let item = list[i];

        const newEle = parent.children[0].cloneNode(true);
        newEle.style.display = "flex";


        newEle.children[0].innerHTML = "<img src=" + item.avatar + ">";
        newEle.children[1].children[0].innerHTML = "ID: " + item.id;
        newEle.children[1].children[1].innerHTML = "Name: " + item.first_name + " " + item.last_name;
        newEle.children[1].children[2].innerHTML = "EmailId: " + item.email;
        parent.insertBefore(newEle, parent.firstChild)

    }



};


//+ item.first_name + " " + item.last_name
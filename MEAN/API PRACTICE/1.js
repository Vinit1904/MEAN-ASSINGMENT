let callAjax = function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        const rjson = JSON.parse(xhr.responseText);
        //console.log(rjson);
        domlogic(rjson);
    }

    xhr.send();
};

let domlogic = function (refjson) {
    let parent = document.querySelector("#parent");

    for (let i = 0; i < refjson.length; i++) {
        let item = refjson[i];

        let newelement = parent.children[0].cloneNode(true);
        newelement.innerHTML = item.FirstName + " " + item.LastName;

        parent.insertBefore(newelement, parent.firstChild);
    }


}



let callAjaxXML = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application / xml");

    xhr.onload = () => {
        const xmldoc = xhr.responseXML;
        domlogic1(xmldoc);
    };

    xhr.send();

};

let domlogic1 = (refxml) => {

    //console.log(refxml);

    const parentElement = xmlDoc.querySelector("ArrayOfAuthor");
    console.log(parentElement);

    for (let i = 0; i < parentElement.children.length; i++) {
        let authorItem = parentElement.children[i];

        // let firstName = authorItem.querySelector("FirstName").innerHTML;
        // let lastName = authorItem.querySelector("LastName").innerHTML;

        let firstName = authorItem.children[0].innerHTML;
        let lastName = authorItem.children[3].innerHTML;

        // HTML DOM
        let parent = document.querySelector("#parent");
        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = firstName + " " + lastName;

        parent.insertBefore(newElement, parent.firstChild);
    }
};







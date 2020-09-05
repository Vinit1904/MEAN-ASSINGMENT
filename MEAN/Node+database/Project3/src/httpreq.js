let getdata = function () {

    let xhr = new XMLHttpRequest();

    let url = "http://localhost:5600/";

    xhr.open("GET", url);

    xhr.onload = () => {
        const jref = JSON.parse(xhr.responseText);
        domoperation(jref);

    };

    xhr.send();
};

let domoperation = function (jref) {

    const pb = document.querySelector(".parent");
    for (let i = 0; i < jref.length; i++) {

        let data = jref[i];

        const newEle = pb.children[0].cloneNode(true);
        newEle.style.display = "block";
        newEle.style.margin = "10px";


        newEle.children[0].innerHTML = "City = " + data.city;
        newEle.children[1].innerHTML = "Max. Temp = " + data.maxTemp;
        newEle.children[2].innerHTML = "Min. Temp = " + data.minTemp;



        pb.appendChild(newEle);
    }

};
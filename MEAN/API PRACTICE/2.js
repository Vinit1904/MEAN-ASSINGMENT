let pdata = () => {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://dev132-cricket-live-scores-v1.p.rapidapi.com/playersbyteam.php?teamid=4");
    xhr.setRequestHeader("x-rapidapi-host", "dev132-cricket-live-scores-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "83f065a566msh12c75ada0976d6bp1f67ddjsn9eaa3936c4b3");

    xhr.send();

};
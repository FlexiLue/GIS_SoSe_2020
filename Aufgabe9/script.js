"use strict";
var A09Server;
(function (A09Server) {
    let html = document.getElementById("html");
    html.addEventListener("click", server);
    let json = document.getElementById("json");
    json.addEventListener("click", clickJSON);
    async function server() {
        let formData = new FormData(document.forms[0]);
        let url = "https://flexigissose2020.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.text();
        let serverResponse = document.getElementById("antwort");
        serverResponse.innerHTML = responseText;
    }
    async function clickJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://flexigissose2020.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=script.js.map
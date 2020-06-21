"use strict";
var A08Server;
(function (A08Server) {
    let submit = document.getElementById("abgabe");
    submit.addEventListener("click", server);
    async function server() {
        let formData = new FormData(document.forms[0]);
        let url = "https://flexigissose2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=script.js.map
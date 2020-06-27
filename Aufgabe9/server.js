"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const Url = require("url");
var A09Server;
(function (A09Server) {
    //Konsolen Ausgabe
    console.log("Starting server");
    //Vaiablen definition port mit dem Port des Processes 
    let port = Number(process.env.PORT);
    //Überprüft ob Port einen Wert hat, wenn nicht wird ein standard Port zugewiesen
    if (!port)
        port = 8100;
    //Server Variable wird definiert und ein neuer Server wird dieser zugewiesen
    let server = Http.createServer();
    //Der server setzt einen Listener "request" und führt gegebnenfalls handleRequest aus
    server.addListener("request", handleRequest);
    //Der server setzt einen Listener "listening" und führt gegebnenfalls handleRequest aus
    server.addListener("listening", handleListen);
    //Server hört auf den zuvor definierten Port
    server.listen(port);
    //Consolen Aufgabe "Listening" bei Aufruf der Mehtode
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Consolenausgabe "I hear voices!"
        console.log("I hear voices!");
        //Setzt den Header der HTTP Request
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pfad = url.pathname;
            if (pfad == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (pfad == "/json") {
                let jsonAusgabe = JSON.stringify(url.query);
                _response.write(jsonAusgabe);
            }
        }
        _response.end();
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map
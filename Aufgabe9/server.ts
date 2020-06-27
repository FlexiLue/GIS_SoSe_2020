import * as Http from "http";
import * as Url from "url";

export namespace A09Server {
    //Konsolen Ausgabe
    console.log("Starting server");
    //Vaiablen definition port mit dem Port des Processes 
    let port: number = Number(process.env.PORT);
    //Überprüft ob Port einen Wert hat, wenn nicht wird ein standard Port zugewiesen
    if (!port)
        port = 8100;
    
    //Server Variable wird definiert und ein neuer Server wird dieser zugewiesen
    let server: Http.Server = Http.createServer();
    //Der server setzt einen Listener "request" und führt gegebnenfalls handleRequest aus
    server.addListener("request", handleRequest);
    //Der server setzt einen Listener "listening" und führt gegebnenfalls handleRequest aus
    server.addListener("listening", handleListen);
    //Server hört auf den zuvor definierten Port
    server.listen(port);

    //Consolen Aufgabe "Listening" bei Aufruf der Mehtode
    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //Consolenausgabe "I hear voices!"
        console.log("I hear voices!");

        //Setzt den Header der HTTP Request
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pfad: string | null = url.pathname;
            if (pfad == "/html") {
              for (let key in url.query) {
                _response.write(key + ": " + url.query[key] + "<br/>");
              }
            }
            else if (pfad == "/json") {
              let jsonAusgabe: string = JSON.stringify(url.query);
              _response.write(jsonAusgabe);
            }
          }
        _response.end();
    }
}
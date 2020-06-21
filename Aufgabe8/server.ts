import * as Http from "http";

export namespace A08Server {
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


        //schreibt die request url 
        _response.write(_request.url);

        //Beendet den vorgang
        _response.end();
    }
}
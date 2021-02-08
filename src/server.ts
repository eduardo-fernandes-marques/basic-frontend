import { readFile } from "fs";
import { createServer, IncomingMessage, ServerResponse } from "http";

createServer((_: IncomingMessage, response: ServerResponse) => {

    readFile("./src/index.html", (error: NodeJS.ErrnoException | null, html: Buffer) => {
        if (error) {
            throw error;
        }
       

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(html);
        response.end();
    });



}).listen(8080);
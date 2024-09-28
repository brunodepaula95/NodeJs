const http = require('http');

const port = 8080;

//passe os parametros dentro da função create server
//com o req(request) e resp(response)
const server = http.createServer((req, res) => {
    if (req.url == "/home") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end("<h1>Home Page</h1>");
    }

    if (req.url == "/users") {
        const users = [
            {
                nome: "John",
                email: "john@jhon.com"
            },
            {
                nome: "Jane",
                email: "jane@jane.com"
            }
        ];

        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
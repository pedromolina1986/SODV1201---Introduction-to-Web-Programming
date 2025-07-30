//let's import our http module
//const http = require('http');
const express = require('express');

const app = express();

const PORT = 3008;

/*const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello world! this is my first nodes server!")
});

server.listen(PORT, () => {
    console.log("Server is running on http://localhost:", PORT);
});*/

//we could keep using the hhtp module but its API declaration is very verbose and requires us to manually set headers, body, and parse the body

app.use(express.json());

const data = [];

app.get('/items', (req, res) => {
    console.log("All items:\n", data);
    return res.json(data);
});

app.post('/items', (req, res) => {
    const item = req.body;
    res.status(201).json(item);
    
    data.push(item);
})

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:", PORT);
});

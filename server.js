const http = require('http'); 

const server = http.createServer((req, res) => {
    res.end("Nous venons de démarrer!!!"); 
}); 


server.listen(process.env.PORT || 3000);  
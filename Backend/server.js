const http = require('http');
const app = require('./app.js');
const port = process.env.PORT || 3000;


const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is runnig on port ${port}`);
});
const jsonServer = require("json-server");
const auth = require("json-server-auth");
// importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
});
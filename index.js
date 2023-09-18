const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = 8000;

server.db = router.db;

server.use(cors());
server.use(auth);
server.use(middleware);
server.use(router);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log("Link: http://localhost:8000");
});

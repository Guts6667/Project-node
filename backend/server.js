/**
 * Serveur node
 */
//Import of the package http allowing to create a server
const http = require("http");
const app = require("./app");

// normalizePort() returns a valid port wether its a string or a number
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 10) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// errorHandlers() looks for different errors and handle them accordingly.
// The error is then recorded in the server.
const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const address = server.address();
  const bind = typeof address === "string" ? "pipe" + address : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + "requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};
const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port);

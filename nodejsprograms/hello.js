const http = require("http");

// Create a web server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World from Node.js Server!");
});

// Start the server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
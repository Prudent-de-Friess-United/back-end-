const server = require("./api/server.js");
require("dotenv").config();

const port = process.env.PORT || 8000;

server.listen(port, function() {
  console.log(`\n Server is running on localhost:${port} \n`);
});

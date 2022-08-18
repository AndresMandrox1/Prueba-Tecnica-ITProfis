const server = require("./src/app.js");
var { db } = require("./src/models/DB");
const {PORT} = process.env

db.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server is listening at 3001 port");
  });
});

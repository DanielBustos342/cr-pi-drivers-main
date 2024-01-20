const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3002;

conn
  .sync({ force: false }) //alter: true (es para hacer cambios pequeños)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

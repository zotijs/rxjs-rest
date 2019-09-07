const express = require("express");
const mongoCreate = require("./middlewares/mongo");

const app = express();

//initialize mongodb instance
app.use(mongoCreate);

require("./routes/usersRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`Listening to Port ${PORT}`);

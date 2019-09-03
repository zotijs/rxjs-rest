const express = require("express");

const app = express();

require("./routes/usersRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`Listening to Port ${PORT}`);

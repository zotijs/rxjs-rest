const express = require("express");
const multer = require("multer");
const mongoCreate = require("./utils/mongo");

const app = express();
const upload = multer({ dest: "uploads/" });

//initialize mongodb instance
mongoCreate(app);

require("./routes/usersRoutes")(app, upload);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`Listening to Port ${PORT}`);

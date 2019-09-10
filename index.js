const express = require("express");
const multer = require("multer");
const mongoCreate = require("./utils/mongo");

const app = express();
const upload = multer({ dest: "uploads/" });

//initialize mongodb instance
mongoCreate(app);

require("./routes/usersRoutes")(app, upload);

if (process.env.NODE_ENV === "production") {
  //express will serve production assets like
  //main.js or/and main.css
  app.use(express.static("client/build"));

  //express will serve the index.html file
  //if it doesn't know the route
  //handle client side (React Router) routes
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`Listening to Port ${PORT}`);

const { MongoClient } = require("mongodb");
const keys = require("../config");

module.exports = async (req, res, next) => {
  if (req.app.locals.db) return; //singleton

  try {
    const client = await MongoClient.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    req.app.locals.db = client.db("test");
  } catch (err) {
    console.log("MongoDB Error:", err);
    res.status(500).send({ error: "Cannot connect to Database!" });
  } finally {
    next();
  }
};

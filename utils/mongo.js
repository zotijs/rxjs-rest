const { MongoClient } = require("mongodb");
const keys = require("../config");

module.exports = async app => {
  if (app.locals.db) return; //singleton

  try {
    const client = await MongoClient.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.locals.db = client.db("test");
  } catch (err) {
    console.log("MongoDB Error:", err);
  }
};

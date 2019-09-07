const usersCollection = require("../middlewares/usersCollection");
const populateFakes = require("../middlewares/populateFakes");
const { USERS_COLLECTION } = require("../utils/collections");

module.exports = app => {
  app.get("/api/users", usersCollection, populateFakes, async (req, res) => {
    try {
      res.send(
        await req.app.locals.db
          .collection(USERS_COLLECTION)
          .find({})
          .toArray()
      );
    } catch (err) {
      console.log("Retrieve Users Error, ", err);
      res.status(500).send("Users could not be retrieved");
    }
  });
};

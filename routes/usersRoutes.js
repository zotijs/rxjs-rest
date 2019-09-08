const { ObjectID } = require("mongodb");
const usersCollection = require("../middlewares/usersCollection");
const populateFakes = require("../middlewares/populateFakes");
const checkForId = require("../middlewares/checkForId");
const { USERS_COLLECTION } = require("../utils/collections");

module.exports = (app, upload) => {
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
      res.status(500).send("Users could not be retrieved!");
    }
  });

  app.get("/api/users/:id", checkForId, async (req, res) => {
    try {
      res.send(
        await req.app.locals.db
          .collection(USERS_COLLECTION)
          .findOne({ _id: ObjectID(req.params.id) })
      );
    } catch (err) {
      console.log("Retrieve User Error, ", err);
      res.status(500).send("User could not be retrieved!");
    }
  });

  app.post("/api/users", upload.none(), async (req, res) => {
    const { name, surename, description, image } = req.body;

    try {
      res.send(
        (await req.app.locals.db.collection(USERS_COLLECTION).insertOne({
          name,
          surename,
          description,
          image,
          fakeImage: "http://lorempixel.com/200/200/people/"
        })).ops[0]
      );
    } catch (err) {
      console.log("Insert User Error, ", err);
      res.status(500).send("User could not be created!");
    }
  });

  app.delete("/api/users/:id", checkForId, async (req, res) => {
    try {
      res.send(
        (await req.app.locals.db
          .collection(USERS_COLLECTION)
          .deleteOne({ _id: ObjectID(req.params.id) })).result
      );
    } catch (err) {
      console.log("Retrieve User Error, ", err);
      res.status(500).send("User could not be deleted!");
    }
  });

  app.patch("/api/users/:id", checkForId, upload.none(), async (req, res) => {
    //const { name, surename, description, image } = req.body;
    debugger;
    try {
      res.send(
        (await req.app.locals.db.collection(USERS_COLLECTION).updateOne(
          { _id: ObjectID(req.params.id) },
          {
            $set: { ...req.body }
          }
        )).result //.ops[0]
      );
    } catch (err) {
      console.log("Update User Error, ", err);
      res.status(500).send("User could not be updated!");
    }
  });
};

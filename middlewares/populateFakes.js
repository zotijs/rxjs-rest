const _ = require("lodash");
const { USERS_COLLECTION } = require("../utils/collections");

const NAMES = [
  "John",
  "Jane",
  "Jim",
  "Janice",
  "Alex",
  "Chris",
  "Anna",
  "Mark",
  "Bob",
  "Cathrine"
];
const SURENAMES = [
  "Doe",
  "Dean",
  "Don",
  "Burns",
  "Bane",
  "Lee",
  "Moo",
  "Meaw",
  "Burf",
  "Phew"
];

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const bulkFaker = async collection => {
  await collection.insertMany(
    _.times(40, () =>
      Object.create({
        name: NAMES[getRandomInt(NAMES.length)],
        surename: SURENAMES[getRandomInt(SURENAMES.length)],
        fakeImage: "http://lorempixel.com/200/200/people/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      })
    )
  );
};

module.exports = async (req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    try {
      (await req.app.locals.db
        .collection(USERS_COLLECTION)
        .countDocuments({})) === 0 &&
        bulkFaker(await req.app.locals.db.collection(USERS_COLLECTION));
    } catch (err) {
      console.log("Populate fakes error:", err);
      res.status(500).send({ error: "Fakes population error!" });
    } finally {
      next();
    }
  }
};

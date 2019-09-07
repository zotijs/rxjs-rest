const { USERS_COLLECTION } = require("../utils/collections");

module.exports = async (req, res, next) => {
  try {
    !(await req.app.locals.db.collection(USERS_COLLECTION)) &&
      req.app.locals.db.createCollection(USERS_COLLECTION);
  } catch (err) {
    console.log("MongoDB error:", err);
    res
      .status(500)
      .send({ error: `Could not create Collection ${USERS_COLLECTION}` });
  } finally {
    next();
  }
};

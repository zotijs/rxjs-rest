module.exports = (req, res, next) => {
  if (!req.params || !req.params.id) {
    return res.status(404).send({ error: "Id not provided!" });
  }

  next();
};

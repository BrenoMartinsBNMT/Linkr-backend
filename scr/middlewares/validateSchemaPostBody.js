export function postBodySchemaValidate(schema) {
  return async function (req, res, next) {
    const { postBody } = req.body;
    const { error } = schema.validate(postBody);
    try {
      if (error)
        return res
          .status(422)
          .send(error.details.map(({ message }) => message));
      next();
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };
}

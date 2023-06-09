const { object } = require("joi");
const Joi = require("joi");

const loginSchema = async (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .required()
      .messages({ "string.required": `email is a required field` }),
    password: Joi.string()
      .required()
      .messages({ "string.required": `password is a required field` }),
  });

  const { error } = schema.validate(req.body);

  //console.log(" schema data", validObject, "error", { error });

  if (error) {
    const { details } = error;
    res.status(404).json({ error: details });
  } else {
    next();
  }
};

// module is left ti export
module.exports = {loginSchema };

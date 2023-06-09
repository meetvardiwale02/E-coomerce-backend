const Joi = require("joi");

const validateSchema = async (req, res, next) => {
  const productSchema = Joi.object().keys({
    product_name: Joi.string()
      .required()
      .messages({ "any.required": `"product name" is a required field` }),
    product_image: Joi.string()
      .required()
      .messages({ "any.required": `"product image" is a required field` }),
    product_price: Joi.number().min(10).required().messages({
      "number.min": `"product_price" , must be greater 10 Rs`,
      "number.required": `"product_price" , is a required field`,
    }),
    description: Joi.string()
      .max(500)
      .required()
      .messages({ "string.required": `"description" is a required field` }),
    stalk: Joi.number().min(5).required().messages({
      "number.max": `there should be atleast more then 5 product in inventory`,
      "number.required": `stalk is a required field`,
    }),
  });

  const { error } = productSchema.validate(req.body);
  console.log(error);

  if (error) {
    const { details } = error;
    res.status(404).json({ error: details });
  } else {
    next();
  }
};

module.exports = { validateSchema };

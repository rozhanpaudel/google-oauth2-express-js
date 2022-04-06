const Joi = require("joi");

const PostCreation = Joi.object({
  desc: Joi.string().required().messages({
    "string.empty": `Description field should not be empty'`,
    "any.required": `Description is a required field`,
  }),
  //   address: Joi.string().required().messages({
  //     "string.empty": `location/address field should not be empty'`,
  //     "any.required": `"location/address" is a required field`,
  //   }),
  //   email: Joi.string()
  //     .email({
  //       minDomainSegments: 2,
  //       tlds: { allow: ["com", "net"] },
  //     })
  //     .required()
  //     .messages({
  //       "string.empty": `Email should not be empty'`,
  //       "any.required": `Email is a required field`,
  //     }),
  //   phoneNumber: Joi.string()
  //     .min(7)
  //     .max(15)
  //     .pattern(/^[0-9]+$/)
  //     .required()
  //     .messages({
  //       "string.pattern.base": `Phone number must have 10 digits.`,
  //       "string.empty": `Phone number should not be empty`,
  //       "string.required": `Phone number is a required field`,
  //       "string.min": `Phone number must be atleast 7 characters`,
  //       "string.max": `Phone number must be atmost 15 characters`,
  //     }),
  //   panNumber: Joi.string().required().messages({
  //     "string.empty": `Pan number should not be empty`,
  //     "any.required": `Pan number is a required field`,
  //   }),
  //   websiteUrl: Joi.string().required().messages({
  //     "string.empty": `Website URL should not be empty`,
  //     "any.required": `Website URl is a required field`,
  //   }),

  //   contactPersonName: Joi.string().allow(""),
  //   contactPersonMobile: Joi.string().allow(""),
  //   contactPersonEmail: Joi.string().allow(""),
  //   userId: Joi.string(),
});

module.exports = {
  PostCreation,
};

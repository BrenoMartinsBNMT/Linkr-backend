import Joi from "joi";
const regex = /https?:\/\//;
export const postBodySchema = Joi.object({
  link: Joi.string().pattern(regex).required(),
  test_post: Joi.string(),
});

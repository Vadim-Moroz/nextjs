import Joi from "joi";

export const carValidation = Joi.object({
    brand: Joi.string().required().min(1).max(20).pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages({
        "string.min":"Min 1 char",
        "string.max":"Max 20 char",
        "string.pattern.base":"Only chars are allowed",}),
    price: Joi.number().required().min(0).max(1000000).messages({
        "number.min": "Min price is 0",
        "number.max": "Maximum price is 1000000"}),
    year: Joi.number().required().min(1990).max(2026).messages({
        "number.min":"Min year is 1990",
        "number.max":"Max year is 2026"
    }),
})
import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-Яа-яёЁыЫіІїЇгГєЄ]{1,20}$/).required().messages({
        'string.pattern.base': 'Від одного символа, Тільки букви!'
    }),
    price: Joi.number().min(1).max(10000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {carValidator};
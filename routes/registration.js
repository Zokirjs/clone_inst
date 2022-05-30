const express = require('express');
const Joi = require('joi');
const Routes = express.Router()

const schema = Joi.object({
    firstname: Joi.string()
        .alphanum()
        .min(3)
        .required(),
    lastname: Joi.string()
        .alphanum()
        .min(3)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required(),
    confirmPassword: Joi.ref('password'),
    birth: Joi.date()
        .min('01-01-1900')
        .required()
})



Routes.post('/', async (req, res, next) => {
    const result = await schema.validate(...req.body)
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
        return
    }

});


module.exports = Routes
const express = require('express');
const jwt = require('jsonwebtoken');
const jwtconfig = require('../jwt.config');
const ErrorHandler = require('../helpers/errorHandler');

const authValidator = express.Router();
authValidator.use((req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, jwtconfig.key, (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        next(new ErrorHandler(`Token no proveída.`, 404));
    }
});

module.exports = { authValidator }
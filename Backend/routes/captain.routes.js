const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').optional().isLength({min: 3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehical.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehical.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehical.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehical.vehicalType').isIn(['car', 'auto', 'motorcycle']).withMessage('Invalid vehicle type'),
], 
    captainController.registerCaptain
);

module.exports = router;
const express = require('express');
const { check, body } = require('express-validator');
const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
    '/login',
    [
        check('email')
            .isEmail()
            .withMessage('Please eneter a valid email.')
            .custom((value, { req }) => {
                if (value === 'abdo@gmail.com') {
                    throw new Error('Unvalid abdo email');
                }

                return User.findOne({ email: value }).then((userDoc) => {
                    if (!userDoc) {
                        return Promise.reject('I am not here!!');
                    }
                });
            }),
        body('password', 'enter right pass')
            .isLength({ min: 5 })
            .isAlphanumeric(),
    ],
    authController.postLogin
);

router.post(
    '/signup',
    [
        check('email')
            .isEmail()
            .withMessage('Please eneter a valid email.')
            .custom((value, { req }) => {
                if (value === 'abdo@gmail.com') {
                    throw new Error('Unvalid abdo email');
                }

                return User.findOne({ email: value }).then((userDoc) => {
                    if (userDoc) {
                        return Promise.reject('مهو الاهتمام مبيطلبش');
                    }
                });
            }),
        body('password', 'enter right pass')
            .isLength({ min: 5 })
            .isAlphanumeric(),
        body('confirmPassword').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('wrong confirmation');
            }
        }),
    ],
    authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;

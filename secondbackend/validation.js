const { check } = require('express-validator');
 
exports.validateRegisterInput = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
 
exports.validateLoginInput  = [
     check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
 
]
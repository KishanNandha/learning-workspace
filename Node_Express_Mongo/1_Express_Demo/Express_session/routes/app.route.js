const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const appController = require('../controllers/app.controller');
const loginController = require('../controllers/login.controller');

router.get('/',appController.homePage);

router.post('/register',loginController.registerUser);
router.post('/login',loginController.doLogin);
router.get('/logout',loginController.logout);

router.get('/dashboard',userController.dashboard);

module.exports = router;
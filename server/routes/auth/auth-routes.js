const express = require('express');
const { registerUser ,loginUser} = require('../../controllers/auth/auth-controller');
const routers = express.Router();

routers.post("/register" , registerUser);
routers.post("/login" , loginUser);

module.exports = routers;
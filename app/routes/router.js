const express = require('express');
const routes = express.Router();
const handler = require("../handler");
routes.get('/userlogin', handler.LogInUser);
routes.post('/saveuser', handler.createUser);
routes.put('/updateuser', handler.updateUser);
routes.put('/updateuserpassword', handler.updatePassword);
routes.delete('/deleteuser', handler.deleteUser);
module.exports = routes;

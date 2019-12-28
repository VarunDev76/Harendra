const db = require('../dbQueries/dbConnection');
const messages = require('../common/constants.json');
const logger = require('../common/winston');

const LogInUser = require('./functions/sessions/logInUser');
const LogInUserModule = new LogInUser(db, messages, logger);

const createUser = require('./functions/sessions/createUser');
const createUserModule = new createUser(db, messages, logger);

const updateUser = require('./functions/sessions/updateUser');
const updateUserModule = new updateUser(db, messages, logger);

const updatePassword = require('./functions/sessions/updatePassword');
const updatePasswordModule = new updatePassword(db, messages, logger);

const deleteUser = require('./functions/sessions/deleteUser');
const deleteUserModule = new deleteUser(db, messages, logger);

module.exports.LogInUser = (req, res) => {	
	logger.info(`userlog in request with body :(${JSON.stringify(req.body)})`);
	LogInUserModule.loginUser(req, res);
};

module.exports.createUser = (req, res) => {	
	logger.info(`userlog in request with body :(${JSON.stringify(req.body)})`);
	createUserModule.createUser(req, res);
};

module.exports.updateUser = (req, res) => {	
	logger.info(`userlog in request with body :(${JSON.stringify(req.body)})`);
	updateUserModule.updateUser(req, res);
};

module.exports.deleteUser = (req, res) => {	
	logger.info(`userlog in request with body :(${JSON.stringify(req.body)})`);
	deleteUserModule.deleteUser(req, res);
};

module.exports.updatePassword = (req, res) => {	
	logger.info(`userlog in request with body :(${JSON.stringify(req.body)})`);
	updatePasswordModule.updatePassword(req, res);
};


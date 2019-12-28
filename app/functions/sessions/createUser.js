class CreateUser {
	constructor (db, message) {
    this.userDao = db.userDAO,
    this.message = message
	}

	async createUser(req, res) {
		try {
      if (!req.body.userName || !req.body.password) {
				return res.status(400).send({
					status: 400,
					message: this.message.errors.bodyParameters
					});
			}
			//here we can authenticate the user with respect to encrypt or decrypt
			const where = {userName :req.body.userName}
			const userDetails = await this.userDao.findOne(where);
			if (userDetails) {
				return res.status(401).send({
					status: 401,
					message: this.message.messages.userLogIn.found
				});
			}
			const userdata = await this.userDao.create(req.body);
			console.log(userdata);
			return res.status(200).send({
				status: 200,
				message: this.message.messages.userLogIn.create
			});
    } catch (err) {
		return res.status(500).send({
			status: 500,
			message: `Error caught in catch block ${err}`
		  });
    }
	}
}

module.exports = CreateUser;
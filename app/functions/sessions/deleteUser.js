class DeleteUser {
	constructor (db, message) {
    this.userDao = db.userDAO,
    this.message = message
	}

	async deleteUser(req, res) {
		try {
      if (!req.body.id) {
				return res.status(400).send({
					status: 400,
					message: this.message.errors.bodyParameters
					});
			}
			//here we can authenticate the user with respect to encrypt or decrypt
			const where = {_id :req.body.id}
			const userDetails = await this.userDao.removeOne(where);
			console.log(userDetails)
			if (!userDetails) {
				return res.status(401).send({
					status: 401,
					message: this.message.messages.userLogIn.notremoved
        })
        
      }
      return res.status(200).send({
        status: 200,
        message: this.message.messages.userLogIn.removed
      })
    } catch (err) {
		return res.status(500).send({
			status: 500,
			message: `Error caught in catch block ${err}`
		  });
    }
	}
}

module.exports = DeleteUser;
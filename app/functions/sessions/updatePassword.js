class updatePassword {
	constructor(db, message) {
	  this.userDao = db.userDAO,
		this.message = message
	}
  
	async updatePassword(req, res) {
	  try {
		if (!req.body.id || !req.body.oldpassword || !req.body.newpassword) {
		  return res.status(400).send({
			status: 400,
			message: this.message.errors.bodyParameters
		  });
		}
		//here we can authenticate the user with respect to encrypt or decrypt
		const where = { _id: req.body.id }
		const userDetails = await this.userDao.findOne(where);
		if (!userDetails) {
			return res.status(401).send({
				status: 401,
				message: this.message.messages.userLogIn.notupdate
			  })
		}
		if (userDetails.password != req.body.oldpassword) {
			return res.status(401).send({
				status: 401,
				message: this.message.messages.userLogIn.notMatch
			  })
		} 
		const dT = {
			"password": req.body.newpassword
		}
		const userDT = await this.userDao.updateOne(where, dT);
		if (userDT.nModified == 0) {
		  return res.status(401).send({
			status: 401,
			message: this.message.messages.userLogIn.notupdate
		  })
		}
		return res.status(200).send({
		  status: 200,
		  message: this.message.messages.userLogIn.update
		})
	  } catch (err) {
		return res.status(500).send({
		  status: 500,
		  message: `Error caught in catch block ${err}`
		});
	  }
	}
  }
  
  module.exports = updatePassword;
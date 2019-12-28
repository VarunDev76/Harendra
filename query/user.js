const userSchema = require('../modal/user');

module.exports = {
	create: (data) => {
		return userSchema.create(data);
	},
	findOne : (where) => {
		return userSchema.findOne(where);
	},
	updateOne: (criteria, data) => {
		return userSchema.updateOne(criteria, data);
	},
	removeOne: (criteria) => {
		return userSchema.findOneAndRemove(criteria);
	}
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt=require('jsonwebtoken')
let Partner = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String
    },
    isConfirmed: {
        type: Boolean
    },
});
Partner.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, "Jkszxcawq122dsczxczvqwe21", {
		expiresIn: "7d",
	});
	return token;
};
module.exports = mongoose.model('Partner', Partner);
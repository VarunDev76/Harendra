const config = require("./config.js")

module.exports.authorization = (cred, res) => {
  if(cred.token != config.secretToken) {
    res.status(200).send({
      status: 401,
      message: `Invalid Token`
    });
    return false;
  } else {
    return true;
  }
}

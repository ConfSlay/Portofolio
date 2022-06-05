const {projectValidation,contactValidation} = require ("./validation");
const {processFiles} = require ("./upload");
const {verifyToken} = require("./authJwt");

module.exports = {
	verifyToken,
	projectValidation,
	contactValidation,
	processFiles,
};

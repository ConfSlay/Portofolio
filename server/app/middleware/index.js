const {projectValidation, authValidation} = require ("./validation");
const {processFiles} = require ("./upload");

module.exports = {
	projectValidation,
	authValidation,
	processFiles,
};

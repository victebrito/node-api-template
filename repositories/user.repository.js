const UserModel = require("models/user");
const { ObjectId } = require("mongoose").Types;
const { createRepository } =  require("utils/factories");

module.exports = createRepository(UserModel);


/*
module.exports.list = async () => {
    try {
        return []
    } catch(e) {
        throw e;
    }
}
*/

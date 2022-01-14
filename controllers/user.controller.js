const service = require("services/user.service");
const { createResponder } = require("utils/responder");
const { createExpressCrud } = require("utils/factories");
const UserRepository = require("repositories/user.repository");

const UserReponder = createResponder('Usuário');
const crud = createExpressCrud(UserReponder.send, UserRepository);

module.exports = crud;

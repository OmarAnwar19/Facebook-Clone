const dotenv = require("dotenv").config();

module.exports = {
  //MongoURI: `mongodb+srv://host:host@cluster0.4nypy.mongodb.net/fullstackopen?retryWrites=true&w=majority`,
  MongoURI: `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PSWD}@cluster0.4nypy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};

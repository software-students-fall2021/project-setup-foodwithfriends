const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const server = require("../app");

const env = process.env.NODE_ENV || 'development';

(async () => {

  if (env === "test") {

    let mock_mongodb = await MongoMemoryServer.create();

    mongoose.connect(
      mock_mongodb.getUri(),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    setTimeout(
      async () => {
        mongoose.disconnect()
        await mock_mongodb.stop();
        await server.close();
      },
      3000
    );
  }
  else {
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () => {
      console.log("connected!")
    });
  }
})();

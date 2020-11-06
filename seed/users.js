const db = require("../db/connection");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
    email: "YayoiKusama@google.com",
    username:"chase",
    password: "Infinity Room",
    passwordConfirm: "Infinity Room"      
    }
  ];

  await User.insertMany(users);
  console.log("Created users!");
};
const run = async () => {
  await main();
  db.close();
};

run();

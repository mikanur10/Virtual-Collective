const db = require("../db/connection");
const Event = require("../models/event");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const events = [
    {
      name: "Yayoi Kusama",
      imgUrl: "https://i.imgur.com/XjcihYZ.jpg",
      description: `Attend a virtual walk-through of Yayoi Kusama's Infinity Rooms exhibit.`,
      date: "October 9, 2020",
      time: "7 PM",
      category: "Arts",
      subCategory: "Exhibit",
      favorite: false,
    },
    {
      name: "Mark Rothko",
      imgUrl: "https://i.imgur.com/26oR5M8.jpg",
      description: `I do not have a description for this`,
      date: "October 13, 2020",
      time: "3 PM",
      category: "Arts",
      subCategory: "Lecture",
      favorite: true,
    },
    {
      name: "Intro Drawing",
      imgUrl: "https://i.imgur.com/uDNl75J.jpg",
      description: `Boring art class`,
      date: "October 14, 2020",
      time: "1 PM",
      category: "Arts",
      subCategory: "Class",
      favorite: false,
    },
    {
      name: "Lane 8",
      imgUrl: "https://i.imgur.com/2lwsNwq.jpg",
      description: `Attend a virtual concert performance.`,
      date: "October 12, 2020",
      time: "9 PM",
      category: "Music",
      subCategory: "Performance",
      favorite: true,
    },
    {
      name: "Glennon Doyle Reading",
      imgUrl: "https://i.imgur.com/ldJeryx.jpg",
      description: `A book reading, not much else`,
      date: "October 17, 2020",
      time: "3 PM",
      category: "Theatre",
      subCategory: "Book Reading",
      favorite: true,
    },
    {
      name: "Life of Van Gogh",
      imgUrl: "https://imgur.com/7610894d-e80d-4d9c-a130-d6e1210eae84",
      description: `A life of a old person.`,
      date: "November 3, 2020",
      time: "2:30 PM",
      category: "Arts",
      subCategory: "Lecture",
      favorite: false,
    },
  ];

  await Event.insertMany(events);
  console.log("Created events!");
};
const run = async () => {
  await main();
  db.close();
};

run();

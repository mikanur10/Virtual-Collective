const db = require("../db/connection");
const Event = require("../models/event");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const events = [
    {
      title: "Yayoi Kusama",
      imgUrl: "https://i.imgur.com/XjcihYZ.jpg",
      description: `Attend a virtual walk-through of Yayoi Kusama's Infinity Rooms exhibit.`,
      date: "10/9",
      time: "7 PM",
      category: "Arts",
      subCategory: "Exhibit",
      favorite: false,
    },
    {
      title: "Mark Rothko",
      imgUrl: "https://i.imgur.com/26oR5M8.jpg",
      description: `I do not have a description for this`,
      date: "10/13",
      time: "3 PM",
      category: "Arts",
      subCategory: "Lecture",
      favorite: true,
    },
    {
      title: "Intro Drawing",
      imgUrl: "https://i.imgur.com/uDNl75J.jpg",
      description: `Boring art class`,
      date: "10/14",
      time: "1 PM",
      category: "Arts",
      subCategory: "Class",
      favorite: false,
    },
    {
      title: "Lane 8",
      imgUrl: "https://i.imgur.com/2lwsNwq.jpg",
      description: `Attend a virtual concert performance.`,
      date: "10/12",
      time: "9 PM",
      category: "Music",
      subCategory: "Performance",
      favorite: true,
    },
    {
      title: "Glennon Doyle Reading",
      imgUrl: "https://i.imgur.com/ldJeryx.jpg",
      description: `A book reading, not much else`,
      date: "10/17",
      time: "3 PM",
      category: "Theatre",
      subCategory: "Book Reading",
      favorite: true,
    },
    {
      title: "Life of Van Gogh",
      imgUrl: "https://i.imgur.com/DT09h4T.jpg",
      description: `A life of a old person.`,
      date: "11/3",
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

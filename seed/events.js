const db = require("../db/connection");
const Event = require("../models/event");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const events = [
    {
      name: "Yayoi Kusama",
      title: "Infinity Room",
      imgUrl: "https://i.imgur.com/XjcihYZ.jpg",
      imgUrlTwo: "https://i.imgur.com/q2UzBmG.jpg",
      description: `Attend a virtual walk-through of Yayoi Kusama's Infinity Rooms exhibit.`,
      date: "October 9, 2020",
      time: "7 PM",
      category: "Arts",
      subCategory: "Exhibit",
      favorite: false,
    },
    {
      name: "Mark Rothko",
      title: "",
      imgUrl: "https://i.imgur.com/26oR5M8.jpg",
      imgUrlTwo: "",
      description: `I do not have a description for this`,
      date: "October 13, 2020",
      time: "3 PM",
      category: "Arts",
      subCategory: "Lecture",
      favorite: true,
    },
    {
      name: "Intro Drawing",
      title: "",
      imgUrl: "https://i.imgur.com/uDNl75J.jpg",
      imgUrlTwo: "",
      description: `Boring art class`,
      date: "October 14, 2020",
      time: "1 PM",
      category: "Arts",
      subCategory: "Class",
      favorite: false,
    },
    {
      name: "Lane 8",
      title: "",
      imgUrl: "https://i.imgur.com/2lwsNwq.jpg",
      imgUrlTwo: "",
      description: `Attend a virtual concert performance.`,
      date: "October 12, 2020",
      time: "9 PM",
      category: "Music",
      subCategory: "Performance",
      favorite: true,
    },
    {
      name: "Glennon Doyle Reading",
      title: "",
      imgUrl: "https://i.imgur.com/ldJeryx.jpg",
      imgUrlTwo: "",
      description: `A book reading, not much else`,
      date: "October 17, 2020",
      time: "3 PM",
      category: "Theatre",
      subCategory: "Book Reading",
      favorite: true,
    },
    {
      name: "Life of Van Gogh",
      title: "",
      imgUrl: "https://i.imgur.com/DT09h4T.jpg",
      imgUrlTwo: "",
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

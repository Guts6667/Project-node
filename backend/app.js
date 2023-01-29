const express = require("express");

const app = express();

app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihgdfdgs",
      title: "My first object",
      imageUrl: "",
      price: 4900,
      userId: "gazefqfdf",
    },
    {
      _id: "oeihgdfdgdfgs",
      title: "My first object",
      imageUrl: "",
      price: 5900,
      userId: "gazefqfdfaze",
    },
    {
      _id: "oeihgdfdgdf6435gs",
      title: "My first object",
      imageUrl: "",
      price: 5800,
      userId: "gazefqfdfaze654",
    },
  ];
  res.status(200).json(stuff);
});
module.exports = app;

/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socket = require("./server-socket");

const Num = require("./models/num");
const Room = require("./models/room");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socket.addUser(req.user, socket.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/room", (req, res) => {
  Room.find({creator_id: req.user.googleid}).then((data) => {
    res.send(data);
  });
});

router.get("/roomname", (req, res) => {
  Room.find({name: req.body.content}).then((data) => {
    res.send(data);
  });
});

//I don't really understand how req.body.content works
router.post("/room", (req, res) => {
  /**
  const newNum = new Num({
    name: req.body.name,
    locationX: req.body.x,
    locationY: req.body.y,
  });
  */

  const newRoom = new Room({
    name: req.body.name,
    numbers: req.body.objects,
    background: req.body.url,
    creator_id: req.user.googleid,
  });

  newRoom.save().then((room) => res.send(room));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;

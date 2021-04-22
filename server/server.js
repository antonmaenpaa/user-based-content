const express = require("express");
const { MongoServerSelectionError } = require("mongodb");
const app = express();
const port = 5000;
const path = require("path");
const mongoose = require("mongoose");
const PostsRouter = require("./Routers/Posts.router");
const UsersRouter = require("./Routers/User.router");

app.use(express.json());

app.use(PostsRouter);
app.use(UsersRouter);

app.use(express.static(path.join(__dirname, "../client")));
// DB schema

let Users = require("./DbModel/UserSchema"); // Koppla till en POST som skapar en user
let Posts = require("./DbModel/PostsSchema"); // denna ska kopplas till en POST för skapade inlägg

// Connection to DB



// 
mongoose
  .connect(
    `mongodb+srv://newuserlol:newuserlol123@cluster0.gnwvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("You are now connected to your database!");
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(port, () => {
  console.log(`You are runnning on ${port}`);
});

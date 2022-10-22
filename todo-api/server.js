const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/tasks.model");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoapiDB";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET http://localhost:5000/getTasks
app.get("/getTask", async (req, res) => {
  try {
    const response = await Task.find();
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST http://localhost:5000/postTask
app.post("/postTask", async (req, res) => {
  try {
    const response = await Task.create(req.body);
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE http://localhost:5000/deleteTask/:id
app.delete("/deleteTask/:id", async (req, res) => {
  try {
    const response = await Task.deleteOne({ _id: req.params.id });
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

// PATCH http://localhost:5000/editTask/:id
app.patch("/editTask/:id", async (req, res) => {
  try {
    const response = await Task.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, console.log("Server started on PORT 5000"));
  })
  .catch((err) => console.log(err));

const express = require("express");
require("../src/db/connection");

const MensRanking = require("../src/models/mens");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send("same rank already exist");
  }
});

app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.put("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateRecord = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!updateRecord)
      return res.status(404).send("The record with the given ID was not found");
    res.send(updateRecord);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/mens/:id", async (req, res) => {
  try {
    const deleteRecord = await MensRanking.findByIdAndDelete(req.params.id);
    res.send("data deleted");
    if (!deleteRecord)
      return res.status(404).send("The record with the given ID was not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// to get data of particular id
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

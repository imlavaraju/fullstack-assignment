const express = require("express");
const Card = require("../models/helpcentermmodel.js");
const router = express.Router();
const mongoose = require("mongoose");

// Create a card
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({
      id: new mongoose.Types.ObjectId().toString(),
      title,
      description,
    });
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
});

// Get all cards
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve cards" });
  }
});

// Get a specific card by title
router.get("/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) return res.status(404).json({ error: "Card not found" });
    res.json(card);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve card" });
  }
});

module.exports = router;

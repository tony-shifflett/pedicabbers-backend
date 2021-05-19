const Pedicabber = require("../models/Pedicabber");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Pedicabber.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Pedicabber.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Pedicabber.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Pedicabber.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
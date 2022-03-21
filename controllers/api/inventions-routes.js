const router = require("express").Router();
const { Invention } = require("../../models");

// TODO: create routes

// GET ALL INVENTIONS
router.get("/", async (req, res) => {
	try {
		const allInventions = await Invention.findAll();
		res.json(allInventions);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

/*
// GET ONE INVENTION
router.get("/:id", async (req, res) => {});

// ADD ONE INVENTION
router.post("/:id", (req, res) => {});

// EDIT ONE INVENTION
router.put("/:id", (req, res) => {});

// DELETE ONE INVENTION
router.delete("/:id", (req, res) => {});
*/

module.exports = router;

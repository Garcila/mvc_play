const router = require("express").Router();
const { Scientist } = require("../../models");

// GET ALL SCIENTISTS
router.get("/", async (req, res) => {
	try {
		const allScientists = await Scientist.findAll();
		res.json(allScientists);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// TODO: create routes
/*
// GET ONE SCIENTIST
router.get("/:id", async (req, res) => {});

// ADD ONE SCIENTIST
router.post("/:id", (req, res) => {});

// EDIT ONE SCIENTIST
router.put("/:id", (req, res) => {});

// DELETE ONE SCIENTIST
router.delete("/:id", (req, res) => {});
*/

module.exports = router;

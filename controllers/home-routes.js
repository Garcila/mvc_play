const router = require("express").Router();
const { Scientist, Invention } = require("../models");

// Import the custom middleware
// const withAuth = require('../utils/auth');

// GET all inventors for homepage
router.get("/", async (req, res) => {
	res.send("later inventors");
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
// router.get("/gallery/:id", withAuth, async (req, res) => {});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
// router.get("/painting/:id", withAuth, async (req, res) => {});

// router.get("/login", (req, res) => {});

module.exports = router;

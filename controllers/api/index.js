const router = require("express").Router();

const userRoutes = require("./user-routes");
const scientistRoutes = require("./scientists-routes");
const inventionRoutes = require("./inventions-routes");

router.use("/users", userRoutes);
router.use("/scientists", scientistRoutes);
router.use("/inventions", inventionRoutes);

module.exports = router;

const User = require("./User");
const Invention = require("./Invention");
const Scientist = require("./Scientist");

Scientist.hasMany(Invention, {
	foreignKey: "id",
});

Invention.belongsTo(Scientist, {
	foreignKey: "scientist_id",
	onDelete: "CASCADE",
});

module.exports = { User, Invention, Scientist };

const sequelize = require("../config/connection");
const seedInventions = require("./inventionData");
const seedScientists = require("./scientistData");

const seedDB = async () => {
	try {
		await sequelize.sync({ force: true });

		console.log(`
		
		🌱🌱🌱🌱🌱....seeding Scientists 👩‍🔬🧑‍🔬
		
		`);

		await seedScientists();

		console.log(`

		🌱🌱🌱🌱🌱....seeding Inventions 🧪
		
		`);

		await seedInventions();

		process.exit(0);
	} catch (err) {
		console.log("the error ", err);
	}
};

seedDB();

const sequelize = require("../config/connection");
const seedInventions = require("./inventionData");
const seedScientists = require("./scientistData");

const seedDB = async () => {
	try {
		await sequelize.sync({ force: true });

		console.log(`
		
		๐ฑ๐ฑ๐ฑ๐ฑ๐ฑ....seeding Scientists ๐ฉโ๐ฌ๐งโ๐ฌ
		
		`);

		await seedScientists();

		console.log(`

		๐ฑ๐ฑ๐ฑ๐ฑ๐ฑ....seeding Inventions ๐งช
		
		`);

		await seedInventions();

		process.exit(0);
	} catch (err) {
		console.log("the error ", err);
	}
};

seedDB();

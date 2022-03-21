const { Scientist } = require("../models");

const scientistData = [
	{
		scientist_name: "Maria E. Beasley",
		country: "United States",
	},
	{
		scientist_name: "Stephanie L. Kwolek",
		country: "United States",
	},
	{
		scientist_name: "Ann Tsukamoto",
		country: "United States",
	},
	{
		scientist_name: "Ada Lovelace",
		country: "England",
	},
	{
		scientist_name: "Grace Hopper",
		country: "United States",
	},
	{
		scientist_name: "Rosalind Elsie Franklin",
		country: "England",
	},
];

const seedScientists = () => Scientist.bulkCreate(scientistData);

module.exports = seedScientists;

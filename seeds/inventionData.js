const { Invention } = require("../models");

const inventionData = [
	{
		invention_name: "Life raft",
		description:
			"In 1880, Beasley patented a design for improvement of a life raft.[4] Her improvements to the existing design of the lifeboat ensured that the raft would be airtight to protect any provisions...",
		scientist_id: 1,
	},
	{
		invention_name: "Kevlar",
		description:
			"The innovative polymer Poly-p-phenylene terephthalamide, as invented by Kwolek, was released commercially under the name Kevlar",
		scientist_id: 2,
	},
	{
		invention_name: "blood stem cell",
		description:
			"In the early 1990s, she was part of the group of scientists that discovered the human hematopoietic stem cell (blood stem cell)",
		scientist_id: 3,
	},
	{
		invention_name: "first computer program",
		description: "an algorithm designed to be carried out by a machine",
		scientist_id: 4,
	},
	{
		invention_name: "first COBOL compiler",
		description:
			"compiler converted English terms into machine code understood by computers",
		scientist_id: 5,
	},
	{
		invention_name: "structures of DNA",
		description:
			"understanding of the molecular structures of DNA (deoxyribonucleic acid), RNA (ribonucleic acid), viruses, coal, and graphite",
		scientist_id: 6,
	},
];

const seedInventions = () => Invention.bulkCreate(inventionData);

module.exports = seedInventions;

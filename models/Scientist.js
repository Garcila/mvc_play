const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Scientist extends Model {}

Scientist.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		scientist_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 40],
			},
		},
		country: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 20],
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "scientist",
	}
);

module.exports = Scientist;

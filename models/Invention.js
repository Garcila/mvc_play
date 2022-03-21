const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Invention extends Model {}

Invention.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		invention_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 40],
			},
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		scientist_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: "scientist",
				key: "id",
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "invention",
	}
);

module.exports = Invention;

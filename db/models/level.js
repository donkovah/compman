'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Organization, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });

      this.hasMany(models.User ,{
        onDelete: "CASCADE",
      });      

    }
  };
  Level.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organization_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Level',
    underscored: true,
  });
  return Level;
};
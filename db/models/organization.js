'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User ,{
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });

      // this.hasMany(models.Department ,{
      //   onDelete: "CASCADE",
      //   foreignKey: {
      //     allowNull: false
      //   }
      // });

      this.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: {
          name: 'hr_id',
          allowNull: false
        }
      });      

    }
  };
  organization.init({

    hr_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    business_nature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'organization',
    underscored: true,
  });
  return organization;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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

      this.belongsTo(models.Department, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });

      this.belongsTo(models.Designation, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });

      this.belongsTo(models.Type, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });

      this.hasMany(models.Leave, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });      

    }
  };
  User.init({
    reportsto: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    organization_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    designation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    employed: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    confirmed: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
    timestamps: true,
  });
  return User;
};
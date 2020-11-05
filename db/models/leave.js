'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Organization);
    }
  };
  Leave.init({
    name: {
      type: DataTypes.STRING
    },
    organization_id: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Leave',
    underscored: true,
  });
  return Leave;
};
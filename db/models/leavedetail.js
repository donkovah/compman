'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Leave);
    }
  };
  LeaveDetail.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    leave_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reliever_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    approver_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hr_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    resumed: {
      type: DataTypes.DATEONLY
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'LeaveDetail',
    underscored: true,
  });
  return LeaveDetail;
};
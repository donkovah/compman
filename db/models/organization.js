const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const organizations = sequelize.define(
    'organizations',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamp: true,
    }
  );

  return organizations;
};
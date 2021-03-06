'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Story, {
      foreignKey: 'userId',
      as: 'stories'
    })
  };

  return User;
};
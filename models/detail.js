'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    static associate(models) {
      Detail.belongsTo(models.Question, { foreignKey: 'question_code', targetKey: 'question_code', as: 'details' });
    }
  }
  Detail.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_code: DataTypes.STRING,
    options: DataTypes.STRING,
    value_option: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Detail',
  });
  return Detail;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.hasMany(models.Detail, { foreignKey: 'question_code', sourceKey: 'question_code', as: 'details' });
    }
  }
  Question.init({
    question_code: DataTypes.STRING,
    questions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};

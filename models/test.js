'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test.init({
    user_id: DataTypes.STRING,
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    sekolah: DataTypes.STRING,
    phone: DataTypes.STRING,
    id_question: DataTypes.INTEGER,
    options: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hasil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hasil.init({
    user_id: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    sekolah: DataTypes.STRING,
    score_A: DataTypes.INTEGER,
    score_B: DataTypes.INTEGER,
    score_C: DataTypes.INTEGER,
    hasil: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Hasil',
    tableName: 'view_hasil',
    timestamps: false,
  });
  return Hasil;
};
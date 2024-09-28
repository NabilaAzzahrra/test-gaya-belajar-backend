var express = require("express");
var router = express.Router();
const { Detail } = require("../models");

/* GET users listing. */
router.get("/", async (req, res) => {
  const details = await Detail.findAll();
  return res.json(details);
});

router.get("/:id", async (req, res) => {
  try {
    const details = await Detail.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.json(details);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = {
      question_code: req.body.question_code,
      options: req.body.options,
      value_option: req.body.value_option,
    };
    const details = await Detail.create(data);
    return res.status(200).json({
      message: "Berhasil disimpan",
      data: details,
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const data = {
      question_code: req.body.question_code,
      options: req.body.options,
      value_option: req.body.value_option,
    }
    await Detail.update(data, {
      where: {
        id: req.params.id
      }
    });
    const details = await Detail.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      message: 'Berhasil diubah',
      data: details
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Detail.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      message: 'BERHASIL DIHAPUS'
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;

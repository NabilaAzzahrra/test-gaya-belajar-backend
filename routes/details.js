var express = require("express");
var router = express.Router();
const { Detail } = require("../models");

/* GET users listing. */
router.get("/", async (req, res) => {
  const details = await Detail.findAll();
  return res.json(details);
});

router.get("/:id", async (req, res) => {
  const details = await Detail.findOne({
    where: {
      id: req.params.id,
    },
  });
  return res.json(details);
});

router.post("/", async (req, res) => {
  const data = {
    question_code: req.body.question_code,
    options: req.body.options,
    value_option: req.body.value_option,
  };
  const details = await Detail.create(data);
  return res.json({
    message: "Berhasil disimpan",
    data: details,
  });
});

router.patch('/:id', async (req, res) => {
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
  return res.json({
      message: 'Berhasil diubah',
      data: details
  });
});

router.delete('/:id', async (req, res) => {
  await Detail.destroy({
      where: {
          id: req.params.id
      }
  });
  return res.json({
      message:'BERHASIL DIHAPUS'
  });
});

module.exports = router;

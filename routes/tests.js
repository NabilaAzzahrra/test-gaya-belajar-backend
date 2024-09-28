var express = require("express");
var router = express.Router();
const { Test } = require("../models");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const tests = await Test.findAll();
    return res.status(200).json(tests);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tests = await Test.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(tests);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const answers = req.body.answers;
    let data = [];
    answers.forEach((answer) => {
      data.push({
        user_id: answer.user_id,
        nama: answer.nama,
        kelas: answer.kelas,
        sekolah: answer.sekolah,
        phone: answer.phone,
        id_question: answer.id_question,
        options: answer.options,
      });
    });
    await Test.bulkCreate(data);
    return res.status(200).json({
      message: "Created succesfully!",
      data: data,
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = {
      user_id: req.body.user_id,
      nama: req.body.nama,
      kelas: req.body.kelas,
      sekolah: req.body.sekolah,
      phone: req.body.phone,
      id_question: req.body.id_question,
      options: req.body.options,
    };
    await Test.update(data, {
      where: {
        id: req.params.id,
      },
    });
    const tests = await Test.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      message: "Berhasil diubah",
      data: tests,
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Test.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      message: "Berhasil dihapus",
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;

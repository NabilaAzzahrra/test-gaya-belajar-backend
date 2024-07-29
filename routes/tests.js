var express = require("express");
var router = express.Router();
const { Test } = require("../models");

/* GET users listing. */
router.get("/", async (req, res) => {
  const tests = await Test.findAll();
  return res.json(tests);
});

router.get("/:id", async (req, res) => {
  const tests = await Test.findOne({
    where: {
      id: req.params.id,
    },
  });
  return res.json(tests);
});

router.post("/", async (req, res) => {
  // const data = {
  //   user_id: req.body.user_id,
  //   nama: req.body.nama,
  //   kelas: req.body.kelas,
  //   sekolah: req.body.sekolah,
  //   phone: req.body.phone,
  //   id_question: req.body.id_question,
  //   options: req.body.options,
  // };
  // const tests = await Test.create(data);
  // return res.json({
  //   message: "Berhasil disimpan",
  //   data: tests,
  // });

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
    return res.json({
      message: "heuheuheuheu",
      data: data,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Gagal menyimpan data" });
  }
});

router.patch("/:id", async (req, res) => {
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
  return res.json({
    message: "Berhasil diubah",
    data: tests,
  });
});

router.delete("/:id", async (req, res) => {
  await Test.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json({
    message: "BERHASIL DIHAPUS",
  });
});

module.exports = router;

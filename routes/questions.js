var express = require("express");
var router = express.Router();
const { Question, Detail } = require("../models");

router.get("/", async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [{
        model: Detail,
        as: 'details'
      }]
    });
    return res.status(200).json(questions);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findOne({
      where: {
        id: req.params.id,
      },
      include: [{
        model: Detail,
        as: 'details'
      }]
    });
    if (question) {
      return res.status(200).json(question);
    } else {
      return res.status(404).json({ error: 'Question not found' });
    }
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
      questions: req.body.questions,
    };
    const question = await Question.create(data);
    return res.status(200).json({
      message: "Berhasil disimpan",
      data: question,
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
      questions: req.body.questions,
    };
    await Question.update(data, {
      where: {
        id: req.params.id,
      },
    });
    const question = await Question.findOne({
      where: {
        id: req.params.id,
      },
      include: [{
        model: Detail,
        as: 'details'
      }]
    });
    return res.status(200).json({
      message: 'Berhasil diubah',
      data: question,
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Question.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({
      message: 'Berhasil dihapus',
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;

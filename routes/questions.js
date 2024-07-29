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
    return res.json(questions);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
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
      return res.json(question);
    } else {
      return res.status(404).json({ error: 'Question not found' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = {
      question_code: req.body.question_code,
      questions: req.body.questions,
    };
    const question = await Question.create(data);
    return res.json({
      message: "Berhasil disimpan",
      data: question,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
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
    return res.json({
      message: 'Berhasil diubah',
      data: question,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
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
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;

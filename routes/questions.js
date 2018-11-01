const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getQuestions()
    .then(questions => {
      res.render('index', {questions})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/create', (req, res) => {
  res.render('create')
})

router.post('/create', (req, res) => {
  const question = req.body.q
  console.log(question)
  const newAnswer = [
    {answer: req.body.a1},
    {answer: req.body.a2},
    {answer: req.body.a3},
    {answer: req.body.a4},
    {answer: req.body.a5},
    {answer: req.body.a6},
    {answer: req.body.a7},
    {answer: req.body.a8}
  ]
  db.addQuestion(question, newAnswer)
    .then(() => {console.log(newAnswer)})
})

router.get('/edit/:id', (req, res) => {

})

router.post('/edit/:id', (req, res) => {

})

router.get('/play/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getQuestion(id)
    .select('question')
    .then((question) => {
      db.getAnswers(id)
        .then((answers) => {
          const randomNumber = Math.floor(Math.random() * answers.length)
          let qna = question
          qna.answer = answers[randomNumber].answer
          res.render('play', qna)
        })
    })
})

router.post('/play/:id', (req, res) => {

})

module.exports = router

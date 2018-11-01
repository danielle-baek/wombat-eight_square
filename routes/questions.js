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

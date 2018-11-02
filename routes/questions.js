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
  let qId
  db.addQuestion(question)
    .then(() => {
      db.getQuestions()
        .select()
        .then((questions) => {
          qId = questions[questions.length - 1].id
          console.log(qId)
          const newAnswer = [
            {answer: req.body.a1, q_id: qId},
            {answer: req.body.a2, q_id: qId},
            {answer: req.body.a3, q_id: qId},
            {answer: req.body.a4, q_id: qId},
            {answer: req.body.a5, q_id: qId},
            {answer: req.body.a6, q_id: qId},
            {answer: req.body.a7, q_id: qId},
            {answer: req.body.a8, q_id: qId}
          ]
          let notEmpty = []
          for (let item of newAnswer) {
            if (item.answer !== '') {
              notEmpty.push(item)
            }
          }
          console.log(notEmpty)
          db.addAnswers(notEmpty)
            .then(() => res.redirect('/play/' + qId))
        })
    })
})

router.get('/edit/:id', (req, res) => {
  const qId = req.params.id
  db.getGame(qId)
    .then(game => {
      res.render('edit', {game})
    })
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

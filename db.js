const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getQuestion,
  getQuestions,
  addQuestion,
  addAnswers
}

function getQuestions (db = connection) {
  return db('questions').select()
}

function getQuestion (id, db = connection) {
  return db('questions').where('id', id).first()
}

function addQuestion (question, newAnswer, db = connection) {
  return db('questions').insert({question: question})
}

function addAnswers (answer, db = connection) {
  return db('answers').insert(answer)
}

// function getAnswers (q_id, db = connection) {
//   return db('answers').where('q_id', q_id).select()
// }

// function getId (db = connection) {
//   for (x = 0; x < 8; x++)

// }

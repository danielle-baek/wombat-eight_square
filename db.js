const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getQuestion,
  getQuestions,
  addQuestion,
  addAnswer,
  getAnswers
}

function getQuestions (db = connection) {
  return db('questions').select()
}

function getQuestion (id, db = connection) {
  return db('questions').where('id', id).first()
}

function addQuestion (question, newAnswer, db = connection) {
  return db('questions').insert({question: question})
    .then()
}

function addAnswer (questionID, answer, db = connection) {
  return db('answers').insert({q_id: questionID, answer: answer})
}

function getAnswers (questionID, db = connection) {
  return db('answers').where('q_id', questionID).select()
}

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getQuestion: getQuestion,
  getQuestions: getQuestions,
  getAnswers: getAnswers
}

function getQuestions (db = connection) {
  return db('questions').select()
}

function getQuestion (id, db = connection) {
  return db('questions').where('id', id).first()
}

function getAnswers (q_id, db = connection) {
  return db('answers').where('q_id', q_id).select()
}

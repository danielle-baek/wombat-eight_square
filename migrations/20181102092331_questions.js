exports.up = knex =>
  knex.schema.createTable('questions', (t) => {
    t.increments('id').primary()
    t.string('question')
  })

exports.down = knex =>
  knex.schema.dropTable('questions')

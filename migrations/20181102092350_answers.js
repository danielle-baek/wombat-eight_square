exports.up = knex =>
  knex.schema.createTable('answers', (t) => {
    t.increments('id').primary()
    t.integer('q_id').references('questions.id').onDelete('CASCADE').onUpdate('CASCADE')
    t.string('answer')
  })

exports.down = knex =>
  knex.schema.dropTable('answers')

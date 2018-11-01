exports.seed = knex => {
  return knex('questions').del()
    .then(function () {
      return knex('questions').insert([
        {id: 1, question: 'What pizza should I have tonight?'},
        {id: 2, question: 'Where should I go on holiday?'}
      ])
    })
}

exports.seed = knex => {
  return knex('answers').del()
    .then(function () {
      return knex('answers').insert([
        {q_id: 1, answer: 'Hawaiian'},
        {q_id: 1, answer: 'Meat lover'},
        {q_id: 1, answer: "Chef's special"},
        {q_id: 1, answer: 'Pepperoni'},
        {q_id: 1, answer: 'Wombat poop shape'},
        {q_id: 2, answer: 'Hawaii'},
        {q_id: 2, answer: 'Gold Coast'},
        {q_id: 2, answer: 'Bali'},
        {q_id: 2, answer: 'Rome'},
        {q_id: 2, answer: 'Wombat city'}
      ])
    })
}

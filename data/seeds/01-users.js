
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "hayden123",
          password: "bingo123",
          department: "development"
        },
      ]);
    });
};
